import { SailingAreaResponseType } from "@/lib/types";
import apiClient from "@/util/axiosConfig";

/* Get all sailng area api with pagination */
export const getSailingArea = async (page: number, perPage: number): Promise<SailingAreaResponseType> => {
  try {
    const queryParams = {
      page,
      perPage,
    };

    const response = await apiClient.get("/sailing-area", { params: queryParams });
    return response.data as SailingAreaResponseType;
  } catch (error) {
    throw error;
  }
};
