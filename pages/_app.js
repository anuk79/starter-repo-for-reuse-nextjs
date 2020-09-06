import Head from 'next/head';

// styles
import "../styles/globals.css";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>
          <a href="/">Main heading</a>
        </h1>
      </header>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <footer className={styles.footer}>
      
        Footer text here. Visit &nbsp;<a href="https://github.com/anuk79/starter-repo-for-reuse-nextjs">github repo</a>&nbsp; to see code.       
      
    </footer>
    </div>
  );
}

export default MyApp;
