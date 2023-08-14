import { ApolloClient, InMemoryCache } from "@apollo/client";
import {} from "apollo-upload-client";

export const client = new ApolloClient({
  uri: "https://localhost:300/graphql",
  cache: new InMemoryCache(),
});
