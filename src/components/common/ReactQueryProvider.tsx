"use client";

import React, { PropsWithChildren, useState } from "react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useError } from "./error/ErrorContext";

const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  const { updateError } = useError();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 10000,
          },
        },
        queryCache: new QueryCache({
          onError: (error: Error) => updateError(error),
        }),
        mutationCache: new MutationCache({
          onError: (error: Error) => updateError(error),
        }),
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
