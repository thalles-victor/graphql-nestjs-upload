import { client } from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";

interface ApolloProviderProps {
  children: ReactNode;
}

export function ApolloClientProvider({ children }: ApolloProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
