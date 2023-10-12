import '../styles/card.css'
/*

props = {
    name:
    age:
}

*/

export default function Card({name,species,img}){
    return(
        <div className="card">
            <img src={img} alt="default"></img>    
            
            <div className='info'>
            <p>Name: {name}</p> 
            <p>Species: {species}</p>  
            </div>
        </div>
    )
}