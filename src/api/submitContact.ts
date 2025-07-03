import axiosInstance from '@/lib/axios';
import { ContactType } from '@/schemas/contact.schema';

export const submitContact = async (dataContact: ContactType) => {
  try {
    const { name, project_details, ...rest } = dataContact;
    const response = await axiosInstance.post('/contact/', {
      client_name: name,
      description: project_details,
      ...rest,
    });

    return response.data;
  } catch (error: any) {
    const message = error?.response?.data?.message || error.message || 'Error desconocido';
    throw new Error(message);
  }
};
