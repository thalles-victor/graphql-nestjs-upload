import styles from "./page.module.css";

export default function Home() {
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
