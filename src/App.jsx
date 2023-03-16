import { useEffect, useState, useRef } from "react"
import PokemonList from "./Components/PokemonList"


function App() {

  const [allPokemons, setAllPokemons] = useState([])

  const pokemonRef = useRef()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
      .then(res => res.json()) 
      .then(data => {
        setAllPokemons(data.results)
      })
  }, [])

  const showDetail = () => {
    pokemonRef.current.classList.toggle('pokemon__detail')
  }

  return (
    <div className="font-main font-normal text-xl p-6 bg-background">
      <div className="md:flex md:items-center md:justify-between lg:gap-5 lg:justify-start">
        <h1 className="text-base font-light md:text-2xl md:font-medium">Know everything about your <span className="rounded-full bg-main-red border border-solid border-black px-6 py-2 text-white text-base md:font-normal md:px-4">Pokemon!</span></h1>
        <input type="search" name="searchbar" id="searchbar" placeholder="Write your pokemon's name..." className="text-base bg-white w-full mt-6 px-4 py-3 rounded-full border border-solid border-black focus:outline-none focus:ring-main-red focus:ring-1 focus:border-main-red md:w-2/5 md:mt-0 md:py-2 lg:w-1/3" />
      </div>
      <PokemonList pokemons={allPokemons} pokemonRef={pokemonRef} showDetail={showDetail}/>
    </div>
  )
}

export default App
