import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.listContainer}>
      <Head>
        <title>Starter repo</title>
      </Head>

      <section>
        <h1>Table of contents</h1>
        <div>
          <ol>
            <li>
              <Link href="/introduction">
                <a>Link 1</a>
              </Link>
            </li>
            <li>
              <Link href="/introduction">
                <a>Link 2</a>
              </Link>
            </li>
            <li>
              <Link href="/introduction">
                <a>Link 3</a>
              </Link>
            </li>
            <li>
              <Link href="/introduction">
                <a>Link 4</a>
              </Link>
            </li>
            <li>
              <Link href="/introduction">
                <a>Link 5</a>
              </Link>
            </li>
            <li>
              <Link href="/introduction">
                <a>Link 6</a>
              </Link>
            </li>
            <li>
              <Link href="/introduction">
                <a>Link 7</a>
              </Link>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
