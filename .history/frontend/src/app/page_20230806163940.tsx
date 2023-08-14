import Image from "next/image";
import styles from "./page.module.css";
import { gql, useMutation, useQuery } from "@apollo/client";

const GET_ALL_CATS = gql`
  query GET_ALL_CATS {
    cats {
      id
      image
      name
    }
  }
`;

export default function Home() {
  const {} = useQuery();

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
