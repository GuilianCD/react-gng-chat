import Head from 'next/head';
import styles from '@styles/primary.module.css';

import MainNavbar from "@templates/navbar";

export default function MainTemplate(props){
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />

          <meta name="description" content="A site for discussing with others I guess."/>

          <meta property="og:title" content="ActiveNg Chatting Services"/>
          <meta property="og:type" content="website"/>
          
          <meta property="og:image" content="http://doge2048.com/meta/doge-600.png"/>
          <meta property="og:url" content="http://www.youtube.com"/>
        </Head>
    
        <main className={styles.main}>
          {props.children}
        </main>

        <MainNavbar/>
      </div>
      )
}

