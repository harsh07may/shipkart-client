/** key-name for `access_token` in local storage.  */
export const TOKEN_KEY = "token";

/** Standard HTTP response status codes. */
export const APIRESPONSE = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
} as const;

export const MOBILE_BREAKPOINT = 768;
