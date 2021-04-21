import Head from 'next/head';
import styles from '@styles/primary.module.css';

import MainNavbar from "@templates/navbar";

export default function MainTemplate(props){
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
    
        <main className={styles.main}>
          {props.children}
        </main>

        <MainNavbar/>
      </div>
      )
}

