import Head from 'next/head'
import React, {useState, useEffect} from "react";
import styles from '../styles/Home.module.css'
import Checkbox from "../components/Checkbox";
import CardContent from "../components/CardContent";
import Header from "../components/Header";
import fetchJsonp from "fetch-jsonp";

let curArray = [];

export default function Home() {

    const [starState, setStarState] = useState(0)
    const [oneWorldState, setOneWorld] = useState(0)
    const [starAllianceState, setStarAllianceState] = useState(0)

    function getStates(){
        if (starState == "true"){
            return FetchOneResource("Sky Team", "ST")
        }
        if (oneWorldState == "true"){
            return FetchOneResource("Oneworld", "OW")
        }
        if (starAllianceState == "true"){
            return FetchOneResource("Star Alliance", "SA")
        }
        else{
            FetchOneResource("", "")
        }


        return FetchOneResource("Star Alliances", "OW")
    }

    function getP(allianceCode){

  return fetchJsonp('https://www.kayak.com/h/mobileapis/directory/airlines/homework.jsonp', {
      jsonpCallback: 'jsonp',
    })
        .then(function(response) {
            return response.json()
        }
        ).then(function(json) {

            if (allianceCode == ""){
                return json}

            else{
                let result = Object.values(json).filter( ( element => element.alliance == allianceCode))
                console.log(result)
                return result
            }
    }
    )
        .catch(function(ex) {
      console.log('parsing failed', ex)
    }
    )
  }

    function getCurArrayElements(fullAllianceName){
        console.log('----get here')

        return curArray.slice(0,15).map((ele) => <CardContent
            imageSrc={"/airline.svg"}
            airlineName={ele.name}
            allianceName={fullAllianceName}
            website={ele.site}
            phoneNum={ele.phone}
        />)
    }

    function FetchOneResource(fullAllianceName, allianceCode) {
        const [valueA, setValueA] = useState(null);
        const [errorA, setErrorA] = useState(null);
        const [loadingA, setLoadingA] = useState(true);
        async function getA() {
            try {
                setLoadingA(true);
                console.log('hello------------')
                const valueA = await getP(allianceCode);
                setValueA(JSON.stringify(valueA));
                curArray = valueA
                //console.log(curArray)
            } catch (e) {
                setErrorA(e);
                console.log(e)
            } finally {
                setLoadingA(false);
            }
        }
        useEffect(() => {
            getA();
        }, []);

        if (errorA) return "Failed to load resource A";
        //return loadingA ? "Loading..." : valueA;
        return getCurArrayElements(fullAllianceName)
    }

    return (

        // <div>
        //     hello
        //   {FetchOneResource()}
        //   {/*<CardContent/>*/}
        //     {console.log(curArray)}
        //     hello
        // </div>

    <div className={styles.container}>

      <Header/>

      <main className={styles.main}>

          <h1 className={styles.title}>
            Airlines</h1>

          <h1 className={styles.description}>
            Filter by Alliances</h1>

          <checkboxcontainer className={styles.checkboxContainer} >

            <Checkbox label = "Oneworld" onClick={ (value) => setStarState(value)}/>
              {useEffect(
                  () =>{
                      console.log(starState + "-----star state")
                  }

              )}
            <Checkbox label = "Sky Team"/>
            <Checkbox label = "Star Alliance"/>

          </checkboxcontainer>

        <div className={styles.grid}>

            {/*{getStates()}*/}
            {FetchOneResource("","ST")}
            {/*{getCardArrayElements()}*/}
            {/*{getCurArrayElements()}*/}

          {/*<CardContent*/}
          {/*  imageSrc={"/airline.svg"}*/}
          {/*  airlineName={"American Airlines"}*/}
          {/*  allianceName={""}*/}
          {/*  website={""}*/}
          {/*  phoneNum={""}*/}
          {/*>*/}
          {/*</CardContent>*/}

          {/*<CardContent*/}
          {/*    imageSrc={"/airline.svg"}*/}
          {/*    airlineName={"Delta"}*/}
          {/*    allianceName={""}*/}
          {/*    website={""}*/}
          {/*    phoneNum={""}*/}
          {/*>*/}
          {/*</CardContent>*/}

          {/*<CardContent*/}
          {/*    imageSrc={"/airline.svg"}*/}
          {/*    airlineName={"Ukraine International Airlines"}*/}
          {/*    allianceName={""}*/}
          {/*    website={""}*/}
          {/*    phoneNum={""}*/}
          {/*>*/}
          {/*</CardContent>*/}

          {/*<CardContent*/}
          {/*    imageSrc={"/airline.svg"}*/}
          {/*    airlineName={"ANA"}*/}
          {/*    allianceName={""}*/}
          {/*    website={""}*/}
          {/*    phoneNum={""}*/}
          {/*>*/}
          {/*</CardContent>*/}

          {/*<CardContent*/}
          {/*    imageSrc={"/airline.svg"}*/}
          {/*    airlineName={"Emirates"}*/}
          {/*    allianceName={""}*/}
          {/*    website={""}*/}
          {/*    phoneNum={""}*/}
          {/*>*/}
          {/*</CardContent>*/}

          {/*<CardContent*/}
          {/*    imageSrc={"/airline.svg"}*/}
          {/*    airlineName={"Lufthansa"}*/}
          {/*    allianceName={""}*/}
          {/*    website={""}*/}
          {/*    phoneNum={""}*/}
          {/*>*/}
          {/*</CardContent>*/}

          {/*<CardContent*/}
          {/*    imageSrc={"/airline.svg"}*/}
          {/*    airlineName={"Singapore Airlines"}*/}
          {/*    allianceName={""}*/}
          {/*    website={""}*/}
          {/*    phoneNum={""}*/}
          {/*>*/}
          {/*</CardContent>*/}

          {/*<CardContent*/}
          {/*    imageSrc={"/airline.svg"}*/}
          {/*    airlineName={"Ukraine International Airlines (UIA)"}*/}
          {/*    allianceName={"Star Alliance"}*/}
          {/*    website={"flyuia.com"}*/}
          {/*    phoneNum={"+1 800 876-0114"}*/}
          {/*>*/}
          {/*</CardContent>*/}

          {/*<CardContent*/}
          {/*    imageSrc={"/airline.svg"}*/}
          {/*    airlineName={"Finnair"}*/}
          {/*    allianceName={""}*/}
          {/*    website={""}*/}
          {/*    phoneNum={""}*/}
          {/*>*/}
          {/*</CardContent>*/}

          {/*<CardContent*/}
          {/*    imageSrc={"/airline.svg"}*/}
          {/*    airlineName={"Alaska Airlines (AS)"}*/}
          {/*    allianceName={"Oneworld"}*/}
          {/*    website={"alaskaair.com"}*/}
          {/*    phoneNum={"+1 800 252 7522"}*/}
          {/*>*/}
          {/*</CardContent>*/}

          {/*<CardContent*/}
          {/*    imageSrc={"/airline.svg"}*/}
          {/*    airlineName={"Avianca"}*/}
          {/*    allianceName={""}*/}
          {/*    website={""}*/}
          {/*    phoneNum={""}*/}
          {/*>*/}
          {/*</CardContent>*/}

          {/*<CardContent*/}
          {/*    imageSrc={"/airline.svg"}*/}
          {/*    airlineName={"Swiss"}*/}
          {/*    allianceName={""}*/}
          {/*    website={""}*/}
          {/*    phoneNum={""}*/}
          {/*>*/}
          {/*</CardContent>*/}

        </div>

      </main>

    </div>
  )
}
