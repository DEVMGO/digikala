"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../config/react-query";

function ReactQueryProvider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
