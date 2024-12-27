import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { retryHandle } from "./http-service";
import { toast } from "react-toastify";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: unknown) => {
      console.log("err", error);

      //   todo
      //   show notification
      // globally error handling
      console.log("خطایی در سرور رخ داده است");

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      toast.error(error?.response?.data?.error_messages as string);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: unknown) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      toast.error(error?.response?.data?.error_messages as string);
      console.log("خطایی در سرور رخ داده است");
    },
  }),
  defaultOptions: {
    queries: {
      retry: retryHandle(),
      refetchOnWindowFocus: false,
      throwOnError: false,
      refetchOnMount: false,
      staleTime: 1000 * 60 * 60 * 24,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});
