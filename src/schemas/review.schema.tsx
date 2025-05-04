import { z } from 'zod';

export const ReviewSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  thoughts: z.string().min(5, {
    message: 'Please share your thoughts (minimum 5 characters).',
  }),
  suggestions: z.string().optional(),
  rating: z.number().min(1, {
    message: 'Please select a rating.',
  }),
});

export type ReviewType = z.infer<typeof ReviewSchema>;
