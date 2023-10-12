import { useEffect, useState } from "react";
import Card from "./Card";
import '../styles/view.css'

export default function GridView(){


    const [characters,setCharacters] = useState([])

    async function getData(){
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        return data
    }


    useEffect(()=>{
        const characters = getData()
        .then(data=>{
            setCharacters(data.results)
    })
        
    },[])

    return (
      <div className="gridView">

            {
                characters.map(e=> <Card name={e.name} species={e.species} img={e.image}></Card>)
            }

      </div>      
    )
}