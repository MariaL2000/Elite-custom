import axiosInstance from '@/lib/axios';

export const fetchData = async () => {
  const response = await axiosInstance.get('/index');
  if (!response.data.success) {
    throw new Error('Failed to fetch data');
  }
  return response.data.data;
};
