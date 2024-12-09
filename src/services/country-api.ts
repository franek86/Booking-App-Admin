import apiClient from "@/util/axiosConfig";
import { CountiresType, CountriesResponseType } from "@/lib/types";

/* Get all countires api */
export const getCountires = async (page: number, perPage: number): Promise<CountriesResponseType> => {
  try {
    const response = await apiClient.get(`/countries?page=${page}&perPage=${perPage}`);
    return response.data as CountriesResponseType;
  } catch (error) {
    throw error;
  }
};

/* Fetch single country by id */
export const fetchSingleCountry = async (id?: string): Promise<CountiresType> => {
  try {
    const response = await apiClient.get(`/countries/${id}`);
    return response.data.data as CountiresType;
  } catch (error) {
    throw error;
  }
};

/* Create country */
export const createCountry = async (formData: CountiresType): Promise<CountiresType> => {
  try {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("shortCountryCode", formData.shortCountryCode);
    data.append("longCountryCode", formData.longCountryCode);
    if (formData.iconFlag && formData.iconFlag.length > 0) {
      data.append("iconFlag", formData.iconFlag[0]);
    }
    const record = await apiClient.post("/countries/create", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return record.data;
  } catch (error) {
    throw error;
  }
};

/* Delete country by id */
export const deleteCountry = async (id: string) => {
  try {
    const response = await apiClient.delete(`/countries/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/* TO DO: Update country by id api */
export const editCountry = async (id: string, formData: CountiresType): Promise<CountiresType> => {
  try {
    const { name, shortCountryCode, longCountryCode, iconFlag } = formData;

    if (name || shortCountryCode || longCountryCode) {
      await apiClient.patch(`/countries/${id}`, {
        name,
        shortCountryCode,
        longCountryCode,
      });
    }
    if (iconFlag && iconFlag.length > 0) {
      const data = new FormData();
      /*  data.append("name", formData.name);
        data.append("shortCountryCode", formData.shortCountryCode);
        data.append("longCountryCode", formData.longCountryCode); */
      data.append("iconFlag", iconFlag[0]);

      await apiClient.patch(`/countries/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }

    const record = await apiClient.patch(`/countries/${id}`);
    return record.data.update;
  } catch (error) {
    throw error;
  }
};
