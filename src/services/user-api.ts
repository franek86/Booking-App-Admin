import { LoginUserType, RegisterUserType } from "@/lib/types";
import apiClient from "@/util/axiosConfig";

/* Register api */
export const userRegisterApi = async (formData: RegisterUserType): Promise<void> => {
  try {
    const response = await apiClient.post("/register", formData, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/* Login api */
export const userLoginApi = async ({ email, password }: LoginUserType): Promise<any> => {
  try {
    const response = await apiClient.post("/login", { email, password }, { withCredentials: true });
    if (response.status !== 200 || response.data.error) {
      throw new Error(response.data.message || "Login failed");
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

/* Refresh token api */
export const refreshTokenApi = async () => {
  try {
    const response = await apiClient.post("/refresh-token", { withCredentials: true });
    return response.data.accessToken;
  } catch (error) {
    throw null;
  }
};

/* Check user authentification */
export const getSession = async () => {
  try {
    const response = await apiClient.get("/getSession", { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/* Logout api */
export const userLogoutApi = async (): Promise<void> => {
  try {
    const response = await apiClient.post("/logout", {}, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error;
  }
};
