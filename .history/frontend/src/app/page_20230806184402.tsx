"use client";

import { gql, useMutation } from "@apollo/client";
import styles from "./page.module.css";

const CREATE_CAT_MUTATION = gql`
  mutation CREATE_CAT($file: Upload!) {
    createCat(
      createCatInput: { name: "Garfield", breed: "gato perça", image: $file }
    ) {
      id
      name
      breed
      image
      created_at
    }
  }
`;

export default function Home() {
  const [mutate] = useMutation(CREATE_CAT_MUTATION);

  function onChagne({
    target: {
      validity,
      files: [file],
    },
  }: any) {
    if (validity.valid) mutate({ variables: { file } });
  }

  return (
    <main className={styles.main}>
      <form>
        <input placeholder="name" />
        <input placeholder="breed" />
        <input placeholder="image" type="file" />
      </form>
    </main>
  );
}
