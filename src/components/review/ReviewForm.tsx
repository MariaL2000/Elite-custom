import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { StarRating } from './StarRating';

import { motion } from 'motion/react';
import { SendIcon } from 'lucide-react';
import { ReviewSchema, ReviewType } from '@/schemas/review.schema';
import { submitReview } from '@/api/submitReview';
import { useMutation } from '@tanstack/react-query';
import { toastPromise } from '../ui/toast-promise';

export function ReviewForm() {
  const [rating, setRating] = useState(0);

  const form = useForm<ReviewType>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: {
      name: '',
      thoughts: '',
      suggestions: '',
      rating: 0,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ReviewType) =>
      toastPromise(submitReview(data), {
        loading: 'Sending your comment...',
        success: res => res.message || 'comment sent successfully.',
        error: err => err.message || 'Error submitting form.',
      }),
  });
  function onSubmit(values: ReviewType) {
    mutate(values, {
      onSuccess: () => {
        form.reset();
        setRating(0)
      },
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="w-full rounded-lg bg-white p-6 shadow-md xl:w-[60%] xl:p-[2vw] xl:shadow-2xl dark:bg-gray-800"
    >
      <h2 className="mb-6 text-center text-2xl font-bold xl:text-[2vw]">Leave a Review</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <FormItem>
                  <FormLabel className="text-lg xl:text-[1.2vw]">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      {...field}
                      className="h-[8vh] text-[3.5vw] xl:h-[5vh] xl:text-[1vw]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs xl:text-[1.1vw]" />
                </FormItem>
              </motion.div>
            )}
          />

          <FormField
            control={form.control}
            name="thoughts"
            render={({ field }) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FormItem>
                  <FormLabel className="text-lg xl:text-[1.2vw]">What do you think?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your thoughts"
                      className="min-h-[20vh] text-[3.5vw] xl:min-h-[15vh] xl:text-[1vw]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs xl:text-[1.1vw]" />
                </FormItem>
              </motion.div>
            )}
          />

          <FormField
            control={form.control}
            name="suggestions"
            render={({ field }) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FormItem>
                  <FormLabel className="text-lg xl:text-[1.2vw]">Any suggestions?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your suggestions (optional)"
                      className="min-h-[20vh] text-[3.5vw] xl:min-h-[15vh] xl:text-[1vw]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </motion.div>
            )}
          />

          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <FormItem>
                  <FormLabel className="text-lg xl:text-[1.2vw]">Rating</FormLabel>
                  <FormControl>
                    <div>
                      <StarRating
                        rating={rating}
                        setRating={value => {
                          setRating(value);
                          field.onChange(value);
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormDescription className="text-lg xl:text-[1.2vw]">
                    How would you rate your experience?
                  </FormDescription>
                  <FormMessage className="text-xs xl:text-[1.1vw]" />
                </FormItem>
              </motion.div>
            )}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Button
              type="submit"
              disabled={isPending}
              className="h-[8vh] w-full text-xl xl:h-[6vh] xl:text-[1.5vw]"
            >
              {isPending ? 'Enviando...' : 'Enviar'}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <SendIcon className="xl:ml-[1%] 2xl:size-[1.3vw]" />
              </motion.span>
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
}
