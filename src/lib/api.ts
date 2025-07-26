import { APIRESPONSE } from "@/constants";
import axios from "axios";
import { toast } from "sonner";
import { clearToken, getToken, setToken } from "./auth/TokenManager";

const api = axios.create({
  baseURL: "https://localhost:7019/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
}); 

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 with automatic token refresh
    if (
      error.response?.status === APIRESPONSE.UNAUTHORIZED &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // cookies for refresh tokens
        const response = await api.post("/auth/refresh");
        const { token } = response.data.data;

        setToken(token);

        // Retry the original request with new token
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh failed, redirect to login
        handleUnauthorized();
        return Promise.reject(refreshError);
      }
    }

    // handleApiError(error);
    return Promise.reject(error);
  },
);

const handleUnauthorized = (): void => {
  clearToken();

  if (typeof window !== "undefined") {
    toast.error("Session expired. Please log in again.");

    const currentPath = window.location.pathname;
    const redirectPath =
      currentPath !== "/login" && currentPath !== "/"
        ? `/login?redirect=${encodeURIComponent(currentPath)}`
        : "/login";

    window.location.href = redirectPath;
  }
};
export default api;
