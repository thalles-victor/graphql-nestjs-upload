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
      breed
    }
  }
`;

export default function Cats() {
  const { data, error, loading } = useQuery<CatsEntity[]>(GET_ALL_CATS);

  if (!data) return <p>Nunhum gato encontrado</p>;

  if (loading) return <p>carregando...</p>;

  if (error) return <p>error ao buscar os gatos</p>;

  console.log(data);

  return (
    <div>
      {data
        ? data.map((_data) => {
            return <h1>{_data.id}</h1>;
          })
        : []}
    </div>
  );
}
