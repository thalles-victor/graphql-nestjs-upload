"use client";

import { gql, useQuery } from "@apollo/client";

interface CatsEntity {
  id: string;
  name: string;
  created_at: Date;
}

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

  if (!data) return <p>Nunhum gato encontrado</p>;

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
