import { z } from 'zod';

export const ContactSchema = z.object({
  name: z
    .string()
    .min(8, { message: 'Name must be at least 8 characters' })
    .max(20, { message: 'Name cannot exceed 20 characters' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  phone: z
    .number({
      invalid_type_error: 'Phone must be a number',
      required_error: 'Phone is required',
    })
    .min(100000000, { message: 'Phone must have at least 9 digits' })
    .max(999999999999, { message: 'Phone cannot exceed 12 digits' }),
  address: z
    .string()
    .min(5, { message: 'Address must be at least 5 characters' })
    .max(100, { message: 'Address cannot exceed 100 characters' }),
  project_details: z
    .string()
    .min(10, { message: 'Details must be at least 10 characters' })
    .max(150, { message: 'Details cannot exceed 150 characters' }),
});

export type ContactType = z.infer<typeof ContactSchema>;
