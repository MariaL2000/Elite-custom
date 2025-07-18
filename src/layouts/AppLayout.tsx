import { DataProvider } from '@/context/DataContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Main } from '../components/Main';

const queryClient = new QueryClient();

export const AppLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <Main />
      </DataProvider>
    </QueryClientProvider>
  );
};
