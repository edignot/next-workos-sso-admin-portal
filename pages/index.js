import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Testing WorkOS Features</title>
        <meta name="description" content="Testing WorkOS Features" />
      </Head>

      <h1 className={styles.title}>Testing WorkOS Features</h1>

      <div>
        <Link href="/sso">
          <h2 className={styles.active}>SSO &rarr;</h2>
        </Link>
        <Link href="/">
          <h2 className={styles.inactive}>Admin Portal &rarr;</h2>
        </Link>
        <Link href="/">
          <h2 className={styles.inactive}>Dyrectory Sync &rarr;</h2>
        </Link>
        <Link href="/">
          <h2 className={styles.inactive}>Magic Link &rarr;</h2>
        </Link>
      </div>
    </div>
  )
}
