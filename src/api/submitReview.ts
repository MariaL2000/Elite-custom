import axiosInstance from '@/lib/axios';
import { ReviewType } from '@/schemas/review.schema';

export const submitReview = async (reviewData: ReviewType) => {
  try {
    const { name, rating, thoughts, suggestions } = reviewData;
    const response = await axiosInstance.post('/comments/', {
      name,
      opinion: thoughts,
      rating,
      sug: suggestions,
    });

    return response.data;
  } catch (error: any) {
    const message = error?.response?.data?.message || error.message || 'Error desconocido';
    throw new Error(message);
  }
};
