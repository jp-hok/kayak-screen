import Head from 'next/head'
import React, {useState} from "react";
import styles from '../styles/Home.module.css'
import Checkbox from "../components/Checkbox";


export default function Home() {
    const [checked, setChecked] = useState(false)

    return (
      <Checkbox
        checked={checked}
        onChange={(val) => setChecked(val)}
        label={"Count me in!"}
      />

    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //
    //   <header className={styles.footer}>
    //     <a
    //         href="https://www.kayak.com"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //     >
    //
    //       <img src="/kayak.svg" alt="Kayak Logo" className={styles.logo} />
    //     </a>
    //   </header>
    //
    //
    //
    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Airlines
    //     </h1>
    //     <h1 className={styles.description}>
    //       Filter by Alliances
    //     </h1>
    //
    //     {/*<code className={styles.code}></code>*/}
    //
    //       <checkboxcontainer className={styles.checkboxContainer} >
    //         <input className={styles.checkbox} type={"checkbox"} />
    //         <label className={styles.checkboxDescription}> OneWorld</label>
    //         <span class={styles.checkbox}></span>
    //       {/*  <input className={styles.checkbox} type={"checkbox"} />*/}
    //       {/*  <label className={styles.checkboxDescription}> Sky Team</label>*/}
    //       {/*  <input className={styles.checkbox} type={"checkbox"} />*/}
    //       {/*  <label className={styles.checkboxDescription}> Star Alliance</label>*/}
    //       </checkboxcontainer>
    //
    //
    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <img src="/kayak.svg" alt="Kayak Logo" className={styles.avatar} />
    //         <h3>Documentation &rarr;</h3>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //         <p2>Testing</p2>
    //
    //       </a>
    //
    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h3>Learn &rarr;</h3>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>
    //
    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h3>Examples &rarr;</h3>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>
    //
    //       <a
    //         href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h3>Deploy &rarr;</h3>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>
    //
    // </div>
  )
}
