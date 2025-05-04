// hooks/useToastMutation.ts
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { toastPromise } from '@/components/ui/toast-promise';

type ToastMessages<T> = {
  loading: string;
  success: (data: T) => string;
  error: (err: any) => string;
};

type UseToastMutationOptions = {
  resetForm?: () => void;
};

export function useToastMutation<TData = unknown, TVariables = void>(
  mutationFn: (data: TVariables) => Promise<TData>,
  messages: ToastMessages<TData>,
  options?: UseMutationOptions<TData, unknown, TVariables> & UseToastMutationOptions
) {
  return useMutation<TData, unknown, TVariables>({
    mutationFn: (variables: TVariables) => toastPromise(mutationFn(variables), messages),
    onSuccess: (data, variables) => {
      // Si se pasa `resetForm`, lo ejecutamos
      if (options?.resetForm) {
        options.resetForm();
      }
    },
    ...options,
  });
}
