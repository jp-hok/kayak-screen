import React, {useState, useEffect} from "react";
import styles from '../styles/Home.module.css'
import Checkbox from "../components/Checkbox";
import CardContent from "../components/CardContent";
import Header from "../components/Header";
import fetchJsonp from "fetch-jsonp";

let curArray = [];

export default function Home() {

    const [initState, setInitState] = useState(false)
    const [skyTeamState, setSkyTeamState] = useState(false)
    const [oneWorldState, setOneWorld] = useState(false)
    const [starAllianceState, setStarAllianceState] = useState(false)

    function getP(){

  return fetchJsonp('https://www.kayak.com/h/mobileapis/directory/airlines/homework.jsonp', {
      jsonpCallback: 'jsonp',
    })
        .then(function(response) {
            return response.json()
        })
        .catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

    function getCurArrayElements(fullAllianceName, allianceCode){
        let result = Object.values(curArray);

        if (allianceCode != "") {
            result = Object.values(curArray).filter((element => element.alliance == allianceCode))
        }

        return result.slice(0,20).map((ele) => <CardContent
            imageSrc={"/airline.svg"}
            airlineName={ele.name}
            allianceName={fullAllianceName}
            website={ele.site}
            phoneNum={ele.phone}
        />)
    }

    function FetchOneResource(fullAllianceName, allianceCode) {
        const [errorA, setErrorA] = useState(null);
        async function getA() {
            try {
                const valueA = await getP(allianceCode);
                curArray = valueA
            } catch (e) {
                setErrorA(e);
                console.log(e)
            }
        }
        useEffect(() => {
            getA();
        }, []);
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
            
            {FetchOneResource("","ST")}
            {skyTeamState && starAllianceStaten && oneWorldState?  getCurArrayElements("","") : ""}
            {initState? "hello" : <CardContent
                imageSrc={"/airline.svg"}
                airlineName={"Brandon Hok"}
                allianceName={"Team Kayak"}
                website={"www.linkedin.com/in/brandon-hok"}
                phoneNum={"571-310-1992"}
            >
            </CardContent>}

            {skyTeamState?  "" : getCurArrayElements("Sky Team", "ST") }
            {starAllianceState?  "" : getCurArrayElements("Star Alliance", "SA")}
            {oneWorldState? "" : getCurArrayElements("One World", "OW")}

        </div>

      </main>

    </div>
  )
}
