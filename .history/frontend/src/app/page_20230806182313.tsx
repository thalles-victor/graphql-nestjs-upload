import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const { data } = useQuery(GET_ALL_CATS);

  console.log(data);

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
