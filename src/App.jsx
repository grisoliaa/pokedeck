import { useEffect, useState } from "react"
import axios from "axios"

const App = () => {

  const [pokemons,setPokemons] = useState([])

  useEffect(() => {

    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => setPokemons(response.data.results))

  },[])

  return (
    <>
    
      <h1>Pokemons</h1>

      {pokemons.map((pokemon) => (

        <div> {pokemon.name} </div>

      ))}
    
    </>
  )

}


export default App
