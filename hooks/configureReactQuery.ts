import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createAsyncStoragePersistor } from "react-query/createAsyncStoragePersistor-experimental";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { QueryClient } from "react-query";

export const configureReactQuery = (): QueryClient => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2, cacheTime: 1000 * 60 * 60 * 24 } },
  });
  const localStoragePersistor = createAsyncStoragePersistor({
    storage: AsyncStorage,
  });
  persistQueryClient({
    queryClient,
    persistor: localStoragePersistor,
  });
  return queryClient;
};
