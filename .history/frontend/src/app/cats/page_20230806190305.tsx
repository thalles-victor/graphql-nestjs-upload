"use client";

import { gql, useQuery } from "@apollo/client";
import NextImage from "next/image";

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
      breed
    }
  }
`;

export default function Cats() {
  const { data, error, loading } = useQuery<{ cats: CatsEntity[] }>(
    GET_ALL_CATS
  );

  if (!data?.cats) return <p>Nunhum gato encontrado</p>;

  if (loading) return <p>carregando...</p>;

  if (error) return <p>error ao buscar os gatos</p>;

  console.log(data);

  return (
    <div>
      {data.cats
        ? data.cats.map((_data) => {
            return (
              <div>
                <h1>{_data.name}</h1>
                <NextImage src={_data.image} />
              </div>
            );
          })
        : []}
    </div>
  );
}
