import Head from 'next/head'
import React, {useState} from "react";
import styles from '../styles/Home.module.css'
import Checkbox from "../components/Checkbox";
import CardContent from "../components/CardContent";
import Header from "../components/Header";

export default function Home() {

    return (

    <div className={styles.container}>

      <Header/>

      <main className={styles.main}>

          <h1 className={styles.title}>
            Airlines</h1>

          <h1 className={styles.description}>
            Filter by Alliances</h1>

          <checkboxcontainer className={styles.checkboxContainer} >

            <Checkbox label = "OneWorld"></Checkbox>
            <Checkbox label = "Sky Team"></Checkbox>
            <Checkbox label = "Star Alliance"></Checkbox>

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
