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

          <CardContent
              imageSrc={"/aa-logo.svg"}
              airlineName={"Delta"}
              allianceName={""}
              website={""}
              phoneNum={""}
          >
          </CardContent>

          <CardContent
              imageSrc={"/aa-logo.svg"}
              airlineName={"Ukraine International Airlines"}
              allianceName={""}
              website={""}
              phoneNum={""}
          >
          </CardContent>

          <CardContent
              imageSrc={"/aa-logo.svg"}
              airlineName={"ANA"}
              allianceName={""}
              website={""}
              phoneNum={""}
          >
          </CardContent>

          <CardContent
              imageSrc={"/aa-logo.svg"}
              airlineName={"Emirates"}
              allianceName={""}
              website={""}
              phoneNum={""}
          >
          </CardContent>

          <CardContent
              imageSrc={"/aa-logo.svg"}
              airlineName={"Lufthansa"}
              allianceName={""}
              website={""}
              phoneNum={""}
          >
          </CardContent>

          <CardContent
              imageSrc={"/aa-logo.svg"}
              airlineName={"Singapore Airlines"}
              allianceName={""}
              website={""}
              phoneNum={""}
          >
          </CardContent>

          <CardContent
              imageSrc={"/aa-logo.svg"}
              airlineName={"Ukraine International Airlines"}
              allianceName={"Star Alliance"}
              website={"flyuia.com"}
              phoneNum={"+1 800 876-0114"}
          >
          </CardContent>

          <CardContent
              imageSrc={"/aa-logo.svg"}
              airlineName={"Finnair"}
              allianceName={""}
              website={""}
              phoneNum={""}
          >
          </CardContent>

          <CardContent
              imageSrc={"/aa-logo.svg"}
              airlineName={"Alaska Airlines (AS)"}
              allianceName={"Oneworld"}
              website={"alaskaair.com"}
              phoneNum={"+1 800 252 7522"}
          >
          </CardContent>

          <CardContent
              imageSrc={"/aa-logo.svg"}
              airlineName={"Avianca"}
              allianceName={""}
              website={""}
              phoneNum={""}
          >
          </CardContent>

          <CardContent
              imageSrc={"/aa-logo.svg"}
              airlineName={"Swiss"}
              allianceName={""}
              website={""}
              phoneNum={""}
          >
          </CardContent>









        </div>
      </main>

    </div>
  )
}
