import { useEffect, useState } from "react"
import PokemonList from "./Components/PokemonList"


function App() {

  const [allPokemons, setAllPokemons] = useState([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
      .then(res => res.json()) 
      .then(data => {
        setAllPokemons(data.results)
      })
  }, [])

  return (
    <div className="font-main font-normal text-xl p-6 bg-background">
      <h1 className="text-base font-light">Know everything about your <span className="rounded-full bg-red-600 border border-solid border-black px-6 py-2 text-white text-base">Pokemon!</span></h1>
      <input type="search" name="searchbar" id="searchbar" placeholder="Write your pokemon's name..." className="text-base bg-white w-full mt-6 px-4 py-3 rounded-full border border-solid border-black focus:outline-none focus:ring-main-red focus:ring-1 focus:border-main-red" />
      <PokemonList pokemons={allPokemons} />
    </div>
  )
}

export default App
