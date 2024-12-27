import axios from "axios";
import { API_URL } from "../global/global";

function logger<T>(
  type: "info" | "warn" | "error",
  message: string,
  data: Record<string, T> = {}
) {
  // Check if the environment is development
  if (process.env.NODE_ENV === "development") {
    const reset = "\x1b[0m";
    const colors = {
      info: "\x1b[32m", // Green
      warn: "\x1b[33m", // Yellow
      error: "\x1b[31m", // Red
    };

    const color = colors[type] || "\x1b[37m"; // Default to white
    console.log(`${color}[HTTP Logger] ${message}${reset}`, data);
  }
}

export const httpService = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor
httpService.interceptors.request.use(
  (config) => {
    // Adding Authorization token if available
    const token = localStorage.getItem("access"); // Assuming you store your token in local storage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // Logging the request details for debugging
    logger("info", "Request made to", {
      url: config.url,
      method: config.method,
      headers: config.headers,
    });

    return config; // Must return config or a Promise
  },
  (error) => {
    // Handle the error scenario before the request is sent
    logger("error", "Error in request", { error });
    return Promise.reject(error); // Must reject the error
  }
);

// Add a response interceptor
httpService.interceptors.response.use(
  (response) => {
    // Logging successful responses
    logger("info", "Response received", {
      url: response.config.url,
      status: response.status,
    });
    return response; // Must return response
  },
  (error) => {
    // Logging error responses
    if (error.response) {
      logger("error", "Error response received", {
        url: error.response.config.url,
        status: error.response.status,
        data: error.response.data,
      });

      if (error.response.status === 401) {
        // Handle unauthorized access
        logger("warn", "Unauthorized access! Redirecting to main page");

        // Optionally, you might redirect the user or trigger a logout action here
        window.location.href = "/";
      }
    } else {
      logger("error", "Error with the request", { message: error.message });
    }

    return Promise.reject(error); // Must reject the error
  }
);
export const setToken = (token: string) => {
  if (token?.length > 0)
    return {
      headers: { Authorization: `Bearer ${token}` },
    };
};

export const retryHandle = (count = 3) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (failureCount: number, error: any) => {
    if (error?.response?.status < 500 || failureCount > count) {
      return false;
    }
    return true;
  };
};
