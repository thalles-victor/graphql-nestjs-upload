"use client";

import { gql, useQuery } from "@apollo/client";

interface CatsEntity {
  id: string;
  image: string;
  name: string;
  breed: string;
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
  const { data } = useQuery<CatsEntity[] | null>(GET_ALL_CATS);

  if (!data) return <p>Nunhum gato encontrado</p>;

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
