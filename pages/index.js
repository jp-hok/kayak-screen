import Head from 'next/head'
import React, {useState} from "react";
import styles from '../styles/Home.module.css'
import Checkbox from "../components/Checkbox";
import CardContent from "../components/CardContent";

export default function Home() {
    const [checked, setChecked] = useState(false)

    return (
        // <div className={styles.checkboxContainer}>
        //       <Checkbox
        //         checked={checked}
        //         onChange={(val) => setChecked(val)}
        //         label={"One World"}
        //       />
        //
        //       <Checkbox
        //             checked={checked}
        //             onChange={(val) => setChecked(val)}
        //             label={"Skyteam"}
        //       />
        // </div>

    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <a
            href="https://www.kayak.com"
            target="_blank"
            rel="noopener noreferrer"
        >

          <img src="/kayak.svg" alt="Kayak Logo" className={styles.logo} />
        </a>
      </header>



      <main className={styles.main}>
        <h1 className={styles.title}>
          Airlines
        </h1>
        <h1 className={styles.description}>
          Filter by Alliances
        </h1>

        {/*<code className={styles.code}></code>*/}

          <checkboxcontainer className={styles.checkboxContainer} >
            <input className={styles.checkbox} type={"checkbox"} />
            <label className={styles.checkboxDescription}> OneWorld</label>
            <span class={styles.checkbox}></span>
          {/*  <input className={styles.checkbox} type={"checkbox"} />*/}
          {/*  <label className={styles.checkboxDescription}> Sky Team</label>*/}
          {/*  <input className={styles.checkbox} type={"checkbox"} />*/}
          {/*  <label className={styles.checkboxDescription}> Star Alliance</label>*/}
          </checkboxcontainer>


        <div className={styles.grid}>


          <CardContent
            imageSrc={"/aa-logo.svg"}
            airlineName={"American Airlines"}
            allianceName={""}
            website={""}
            phoneNum={""}
            >
          </CardContent>



          <a href="https://nextjs.org/docs" className={styles.card}>
            <div className={styles.avatar}>
              <img src="/aa-logo.svg" alt="Kayak Logo" className={styles.avatar} />
            </div>

            <div >
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
              <p2>Testing</p2>
            </div>

          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <div className={styles.avatar}>
              <img src="/aa-logo.svg" alt="Kayak Logo" className={styles.avatar} />
            </div>

            {/*classname = holder*/}
            <div >
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
              <p2>Testing</p2>
            </div>

          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <div className={styles.avatar}>
              <img src="/aa-logo.svg" alt="Kayak Logo" className={styles.avatar} />
            </div>

            {/*classname = holder*/}
            <div >
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
              <p2>Testing</p2>
            </div>

          </a>




        </div>
      </main>

    </div>
  )
}
