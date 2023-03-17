import { useEffect, useState } from "react"

import PokemonDetails from './PokemonDetails'

export default function PokemonList({ filterCondition, setSelected }) {

    const [limit, setLimit] = useState(20)
    const [isLoading, setIsLoading] = useState(true)

    const [allPokemons, setAllPokemons] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=649&offset=0`)
            .then(res => res.json())
            .then(data => {
                setAllPokemons(data.results)
                setIsLoading(false)
            })
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const handleScroll = async () => {
        if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
        ) {
          setLimit(limit => (limit <= 680) ? limit + 20 : limit)
        }
      };

    return (
        
        <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-3 lg:w-2/3">
            {allPokemons
            .filter(pokemon => pokemon.name.toLowerCase().includes(filterCondition.toLowerCase()))
            .slice(0, limit)
            .map((pokemon) => {
                return (
                    <div key={pokemon.name}>
                        <PokemonDetails pokemon={pokemon} setSelected={setSelected} />
                    </div>
                )
            })}
        </div>
    )
}