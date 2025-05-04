import React, { lazy } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { useMutation } from '@tanstack/react-query';
import { toastPromise } from '../ui/toast-promise';
import { handleConfirm } from '@/api/handleConfirm';
import { Action } from '@/types/data.type';

const LazyImage = lazy(() => import('@/components/ui/LazyImage'));

interface ConfirmButtonsProps {
  orderId: number;
}

export const ConfirmButtons: React.FC<ConfirmButtonsProps> = ({ orderId }) => {
  const { mutate, isPending } = useMutation({
    mutationFn: (action: Action) =>
      toastPromise(handleConfirm(action, orderId), {
        loading: 'Enviando tu respuesta...',
        success: res => res.message || 'Respuesta enviada con éxito.',
        error: err => err.message || 'Error al enviar la respuesta.',
      }),
  });

  const handleResponse = (action: Action) => {
    mutate(action);
  };

  return (
    <div className="relative h-[40vh] w-full overflow-hidden shadow-lg">
      {/* Imagen de fondo con blur */}
      <LazyImage
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Background Room"
        className="absolute inset-0 size-full object-cover blur-xs brightness-[40%] xl:blur-md xl:brightness-75"
      />

      {/* Contenido centrado */}
      <div className="absolute top-1/2 left-1/2 z-10 flex w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-6 text-white">
        <h2 className="text-center text-xl font-semibold xl:text-[1.5vw]">
          ¿Deseas confirmar esta orden?
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="default"
              onClick={() => handleResponse('accept')}
              className="rounded-2xl px-6 py-2 text-base xl:px-[1.5vw] xl:py-[1vw] xl:text-[1vw]"
              disabled={isPending}
            >
              Aceptar
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="destructive"
              onClick={() => handleResponse('reject')}
              className="rounded-2xl px-6 py-2 text-base xl:px-[1.5vw] xl:py-[1vw] xl:text-[1vw]"
              disabled={isPending}
            >
              Denegar
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
