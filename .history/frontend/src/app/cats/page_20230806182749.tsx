"use client";

import { gql, useQuery } from "@apollo/client";

const GET_ALL_CATS = gql`
  query GET_ALL_CATS {
    cats {
      id
      image
      name
    }
  }
`;

export default function Cats() {
  const { data } = useQuery(GET_ALL_CATS);

  return <h1>Cats page</h1>;
}
