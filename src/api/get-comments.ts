import axiosInstance from "@/lib/axios";
import { CommentsResponse } from "@/types/data.type";
import { AxiosError } from "axios";

export const getComments = async (): Promise<CommentsResponse | string> => {
  try {
    const { data } = await axiosInstance.get('/comments');
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      
      return error.response?.data?.message || error.message || "Unknown error occurred";
    }
    return "An unexpected error occurred";
  }
};
