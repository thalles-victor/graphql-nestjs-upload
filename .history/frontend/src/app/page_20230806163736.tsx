import Image from "next/image";
import styles from "./page.module.css";
import { gql, useMutation } from "@apollo/client";

export default function Home() {
  return (
    <main className={styles.main}>
      <form>
        <input placeholder="name" />
        <input placeholder="breed" />
        <input placeholder="image" type="file" onChange={onChange} />
      </form>
    </main>
  );
}
