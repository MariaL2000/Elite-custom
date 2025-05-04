import axiosInstance from '@/lib/axios';
import { Action } from '@/types/data.type';

export const handleConfirm = async (action: Action, orderId: number) => {
  try {
    const res = await axiosInstance.post(`/confirm/${orderId}/`, {
      action,
    });
    return res.data;
  } catch (error: any) {
    console.log({ error });
    const message = error?.response?.data?.message || error.message || 'Error desconocido';
    throw new Error(message);
  }
};
