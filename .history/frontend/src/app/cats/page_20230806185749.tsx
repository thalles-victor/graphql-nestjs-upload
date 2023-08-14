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
  const { data } = useQuery<CatsEntity[]>(GET_ALL_CATS);

  if (!data) return <p>Nunhum gato encontrado</p>;

  console.log(data);

  return (
    <div>
      {data.map((_cat) => {
        return <h1>hello</h1>;
      })}
    </div>
  );
}
