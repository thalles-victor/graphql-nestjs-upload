import { gql } from "@apollo/client";

export const GET_ALL_CATS = gql`
  query GET_ALL_CATS {
    cats {
      id
      image
      name
      breed
    }
  }
`;
