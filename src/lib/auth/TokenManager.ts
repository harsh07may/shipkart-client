/** TokenManager - Utlity functions for setting token in localstorage.*/

import { TOKEN_KEY } from "@/constants";

export const setToken = (token: string | null): void => {
  if (typeof window === "undefined") return;

  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_KEY);
  }
};

export const getToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
};

export const clearToken = (): void => {
  setToken(null);
};

export const hasToken = (): boolean => {
  return !!getToken();
};
