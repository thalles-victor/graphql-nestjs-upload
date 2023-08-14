import Image from "next/image";
import styles from "./page.module.css";
import { gql, useMutation } from "@apollo/client";

const CREATE_CAT_MUTATION = gql`
  mutation ($file: Upload!) {
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
  const [createCat] = useMutation(CREATE_CAT_MUTATION);

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
