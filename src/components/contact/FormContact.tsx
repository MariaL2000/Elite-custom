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
import { motion } from 'motion/react';
import { ContactSchema, ContactType } from '@/schemas/contact.schema';
import { toastPromise } from '../ui/toast-promise';
import { submitContact } from '@/api/submitContact';
import { useMutation } from '@tanstack/react-query';

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
      className="w-full rounded-lg bg-white p-6 shadow-md xl:p-[2vw] xl:shadow-2xl dark:bg-gray-800"
    >
      <h2 className="mb-[3vh] text-center text-2xl font-bold xl:text-[2vw]">Contacto</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[2vh] xl:space-y-[1.5vh]">
          {/* Campo Nombre */}
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
                  <FormLabel className="text-lg xl:text-[1.2vw]">Nombre completo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ingresa tu nombre"
                      {...field}
                      className="h-[8vh] text-[3.5vw] xl:h-[5vh] xl:text-[1vw]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs xl:text-[1.1vw]" />
                </FormItem>
              </motion.div>
            )}
          />

          {/* Campo Email */}
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
                      placeholder="tu@email.com"
                      {...field}
                      className="h-[8vh] text-[3.5vw] xl:h-[5vh] xl:text-[1vw]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs xl:text-[1.1vw]" />
                </FormItem>
              </motion.div>
            )}
          />

          {/* Campo Teléfono */}
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
                  <FormLabel className="text-lg xl:text-[1.2vw]">Teléfono</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ej: 987654321"
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

          {/* Campo Dirección */}
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
                  <FormLabel className="text-lg xl:text-[1.2vw]">Dirección</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ingresa tu dirección"
                      {...field}
                      className="h-[8vh] text-[3.5vw] xl:h-[5vh] xl:text-[1vw]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs xl:text-[1.1vw]" />
                </FormItem>
              </motion.div>
            )}
          />

          {/* Campo Detalles del Proyecto */}
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
                  <FormLabel className="text-lg xl:text-[1.2vw]">Detalles del proyecto</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe tu proyecto (máx. 150 caracteres)"
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
};
