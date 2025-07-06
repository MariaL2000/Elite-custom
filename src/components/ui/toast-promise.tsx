import clsx from 'clsx';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { toast as sonnerToast } from 'sonner';
interface ToastProps {
  id: string | number;
  title: string;
  description: string;
  variant?: 'success' | 'error' | 'loading';
}

export function Toast({ title, description, variant = 'success' }: ToastProps) {
  const baseStyles =
    'flex w-full items-center rounded-lg px-6 py-4 shadow-lg ring-1 ring-black/5 lg:w-[15vw] lg:px-[1vw] lg:py-[0.7vw]';
  const colorStyles = clsx({
    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': variant === 'success',
    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': variant === 'error',
    'bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100': variant === 'loading',
  });

  const icon = {
    success: <CheckCircle className="size-6 text-green-600 xl:size-[1.5vw] dark:text-green-300" />,
    error: <AlertCircle className="size-6 text-red-600 xl:size-[1.5vw] dark:text-red-300" />,
    loading: (
      <Loader2 className="size-6 animate-spin text-gray-500 xl:size-[1.5vw] dark:text-gray-300" />
    ),
  };

  return (
    <div className={clsx(baseStyles, colorStyles)}>
      <div className="mr-4 xl:mr-[1vw]">{icon[variant]}</div>
      <div className="flex flex-1 items-center">
        <div className="w-full">
          <p className="text-lg font-medium xl:text-[1.2vw]">{title}</p>
          <p className="mt-1 text-sm xl:text-[0.8vw]">{description}</p>
        </div>
      </div>
    </div>
  );
}
type ToastContent = {
  title: string;
  description: string;
  variant?: 'success' | 'error' | 'loading';
};

export function toast(toast: ToastContent) {
  return sonnerToast.custom(id => (
    <Toast id={id} title={toast.title} description={toast.description} variant={toast.variant} />
  ));
}

export function toastPromise<T>(
  promise: Promise<T>,
  handlers: {
    loading: string;
    success: (data: T) => string;
    error: (err: any) => string;
  }
) {
  let toastId: number | string;

  sonnerToast.custom(id => {
    toastId = id;
    return <Toast id={id} title="Sending..." description={handlers.loading} variant="loading" />;
  });

  promise
    .then(data => {
      sonnerToast.custom(
        id => (
          <Toast id={id} title="Success" description={handlers.success(data)} variant="success" />
        ),
        { id: toastId }
      );
    })
    .catch(err => {
      sonnerToast.custom(
        id => <Toast id={id} title="Error" description={handlers.error(err)} variant="error" />,
        { id: toastId }
      );
    });

  return promise;
}
