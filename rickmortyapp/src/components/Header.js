
import { useState } from 'react'
import '../styles/header.css'
import Information from './Information'

/*

props = {
    tittle:"Algo"
}

*/

export default function Header({tittle,color}){

    const [showInfo,setShowInfo] = useState(false)

    function handleClick(){
        setShowInfo(!showInfo)
    }

    return (

        <>
          <div className='header-container'>
            <h1 class={`${color}`} >{tittle}</h1>
            <div className='button-container'>
            <button onClick={handleClick}>Info</button>
            </div>
        </div>
        {
            showInfo? <Information></Information> : ""    
        }
        </>
      
    )
}