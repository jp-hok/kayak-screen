import Head from 'next/head'
import React, {useState, useEffect} from "react";
import styles from '../styles/Home.module.css'
import Checkbox from "../components/Checkbox";
import CardContent from "../components/CardContent";
import Header from "../components/Header";
import fetchJsonp from "fetch-jsonp";

let curArray = [];

export default function Home() {

    const [skyTeamState, setSkyTeamState] = useState(0)
    const [oneWorldState, setOneWorld] = useState(0)
    const [starAllianceState, setStarAllianceState] = useState(0)

    function getStates(){
        if (skyTeamState == "true"){
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

    <div className={styles.container}>

      <Header/>

      <main className={styles.main}>

          <h1 className={styles.title}>
            Airlines</h1>

          <h1 className={styles.description}>
            Filter by Alliances</h1>

          <checkboxcontainer className={styles.checkboxContainer} >

            <Checkbox label = "Oneworld" onClick={ (value) => setOneWorld(value)}/>
            <Checkbox label = "Sky Team" onClick={ (value) => setSkyTeamState(value)}/>
            <Checkbox label = "Star Alliance" onClick={ (value) => setStarAllianceState(value)}/>

          </checkboxcontainer>

        <div className={styles.grid}>

            {/*{getStates()}*/}
            {FetchOneResource("","ST")}
            {/*{getCardArrayElements()}*/}
            {/*{getCurArrayElements()}*/}



        </div>

      </main>

    </div>
  )
}
