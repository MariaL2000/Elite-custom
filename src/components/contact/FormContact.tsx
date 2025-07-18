import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SendIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { ContactSchema, ContactType } from '@/schemas/contact.schema';
import { toastPromise } from '../ui/toast-promise';
import { submitContact } from '@/api/submitContact';
import { useMutation } from '@tanstack/react-query';
import { useData } from '@/context/DataContext';
import { cn } from '@/lib/utils';
import { useId } from 'react';

export const FormContact = () => {
  const form = useForm<ContactType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: undefined,
      address: '',
      project_details: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ContactType) =>
      toastPromise(submitContact(data), {
        loading: 'Sending your message...',
        success: res => res.message || 'Message sent successfully.',
        error: err => err.message || 'Error submitting form.',
      }),
  });

  const { colors } = useData();
  const id = useId();
  const dynamicClass = `btn-submit-${id}`;
  const backgroundColor = colors.primary ?? 'var(--chocolate-martini)';

  function onSubmit(values: ContactType) {
    mutate(values, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="w-full rounded-lg bg-white p-6 shadow-md xl:p-[2vw] xl:shadow-2xl"
    >
      <style>
        {`
          .${dynamicClass} {
            background: ${backgroundColor};
            color: white;
          }
        
        `}
      </style>

      <h2 className="mb-[3vh] text-center text-2xl font-bold xl:text-[2vw]">Contact</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[2vh] xl:space-y-[1.5vh]">
          {/* Name */}
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
                  <FormLabel className="text-lg xl:text-[1.2vw]">Full name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className="h-[8vh] text-[3.5vw] xl:h-[5vh] xl:text-[1vw]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs xl:text-[1.1vw]" />
                </FormItem>
              </motion.div>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FormItem>
                  <FormLabel className="text-lg xl:text-[1.2vw]">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      {...field}
                      className="h-[8vh] text-[3.5vw] xl:h-[5vh] xl:text-[1vw]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs xl:text-[1.1vw]" />
                </FormItem>
              </motion.div>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FormItem>
                  <FormLabel className="text-lg xl:text-[1.2vw]">Phone number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Example: 987654321"
                      type="number"
                      {...field}
                      onChange={e => field.onChange(Number(e.target.value))}
                      className="h-[8vh] text-[3.5vw] xl:h-[5vh] xl:text-[1vw]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs xl:text-[1.1vw]" />
                </FormItem>
              </motion.div>
            )}
          />

          {/* Address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <FormItem>
                  <FormLabel className="text-lg xl:text-[1.2vw]">Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your address"
                      {...field}
                      className="h-[8vh] text-[3.5vw] xl:h-[5vh] xl:text-[1vw]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs xl:text-[1.1vw]" />
                </FormItem>
              </motion.div>
            )}
          />

          {/* Project Details */}
          <FormField
            control={form.control}
            name="project_details"
            render={({ field }) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <FormItem>
                  <FormLabel className="text-lg xl:text-[1.2vw]">Project details</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your project (max. 150 characters)"
                      {...field}
                      className="min-h-[20vh] text-[3.5vw] xl:min-h-[15vh] xl:text-[1vw]"
                    />
                  </FormControl>
                  <div className="flex items-center justify-between">
                    <FormMessage className="text-xs xl:text-[1.1vw]" />
                    <span className="text-muted-foreground text-[3vw] xl:text-[0.9vw]">
                      {field.value.length}/150
                    </span>
                  </div>
                </FormItem>
              </motion.div>
            )}
          />

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Button
              type="submit"
              disabled={isPending}
              className={cn(
                dynamicClass,
                'h-[8vh] w-full transition-all duration-200 hover:opacity-90 xl:h-[6vh] xl:text-[1.5vw]'
              )}
            >
              {isPending ? 'Sending...' : 'Send'}
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
};
