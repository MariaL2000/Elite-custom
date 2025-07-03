import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/api/fetchData";

type DataType = {
  main_carousel: string[];
  second_carousel: string[];
  materials: {
    quartz: string | null;
    granite: string | null;
    marble: string | null;
    quartzite: string | null;
  };
  galleries: {
    bathroom: string[];
    kitchen: string[];
    fireplace: string[];
  };
  comparison: {
    before_after: {
      before: string | null;
      after: string | null;
    };
  };
  colors: {
    primary: string | null;
    secondary: string | null;
    buttons: string | null;
  };
};

type ContextType = {
  data: DataType | null;
  loading: boolean;
  error: string | null;
};

const DataContext = createContext<ContextType>({
  data: null,
  loading: false,
  error: null,
});

export const useData = () => useContext(DataContext);

type ProviderProps = {
  children: ReactNode;
};

export const DataProvider = ({ children }: ProviderProps) => {
  const { data, isLoading, error } = useQuery<DataType, Error>({
    queryKey: ["siteData"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5,
    refetchInterval:1000*60*5
  });

  return (
    <DataContext.Provider
      value={{ data: data ?? null, loading: isLoading, error: error?.message ?? null }}
    >
      {children}
    </DataContext.Provider>
  );
};
