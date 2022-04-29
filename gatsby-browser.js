import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export function wrapRootElement({ element }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {element} <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
