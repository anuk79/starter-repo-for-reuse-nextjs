import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function ContentLayoutComponent(props) {
  return (
    <div className={styles.content}>
      <Head>
        <title>{props.title}</title>
      </Head>

      <section className={props.sectionClassName}>
        {props.children}
        <p className={styles.contentNavLinks}>
          {props.prev && (
            <Link href={props.prev.link}>
              <a className={styles.prevLink}>{'← ' + props.prev.text}</a>
            </Link>
          )}
          {props.next && (
            <Link href={props.next.link}>
              <a className={styles.nextLink}>{props.next.text + ' →'}</a>
            </Link>
          )}
        </p>
      </section>
    </div>
  );
}
