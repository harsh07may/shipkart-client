"use client";
import * as authService from "@/lib/auth/AuthService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { hasToken } from "../lib/auth/TokenManager";

function useAuth() {
  const queryClient = useQueryClient();
  const router = useRouter();
  // Get current user query

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: authService.getCurrentUser,
    enabled: hasToken(),
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user); // We do this to update getCurrentUser cache
      toast.success("Logged in successfully!");
      const urlParams = new URLSearchParams(window.location.search);
      const redirectTo = urlParams.get("redirect") || "/";
      router.push(redirectTo);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      const message = error.response?.data?.message || "Login failed";
      toast.error(message);
    },
  });
  // Register mutation
  const registerMutation = useMutation({
    mutationFn: authService.register,
    onSuccess: (data) => {
      toast.success("Registration successful!");
      router.push("/login");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      const message = error.response?.data?.message || "Registration failed";
      toast.error(message);
    },
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: authService.logout,
    onSettled: () => {
      queryClient.clear();
      router.push("/login");
    },
  });

  // Logout all mutation
  const logoutAllMutation = useMutation({
    mutationFn: authService.logoutAll,
    onSettled: () => {
      queryClient.clear();
      router.push("/login");
    },
  });

  // Forgot password mutation
  const forgotPasswordMutation = useMutation({
    mutationFn: authService.forgotPassword,
    onSuccess: () => {
      toast.success("If your email exists, reset instructions have been sent.");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      const message = error.response?.data?.message || "Failed to send reset email";
      toast.error(message);
    },
  });

  // Reset password mutation
  const resetPasswordMutation = useMutation({
    mutationFn: ({ token, newPassword }: { token: string; newPassword: string }) =>
      authService.resetPassword(token, newPassword),
    onSuccess: () => {
      toast.success("Password reset successful!");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      const message = error.response?.data?.message || "Failed to reset password";
      toast.error(message);
    },
  });

  return {
    // User data
    user: userQuery.data,
    isLoading: userQuery.isLoading,
    isAuthenticated: !!userQuery.data && hasToken(),

    // Actions
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    logoutAll: logoutAllMutation.mutate,
    register: registerMutation.mutate,
    forgotPassword: forgotPasswordMutation.mutate,
    resetPassword: resetPasswordMutation.mutate,

    // Loading states
    isLoggingIn: loginMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
    isLoggingOutAll: logoutAllMutation.isPending,
    isRegistering: registerMutation.isPending,
    isForgotPasswordLoading: forgotPasswordMutation.isPending,
    isResetPasswordLoading: resetPasswordMutation.isPending,

    // Utility
    refetchUser: userQuery.refetch,
  };
}

export default useAuth;
