import { useEffect, useState } from "react"
import TypeLabels from "./TypeLabels"

export default function PokemonDetails({ pokemon }) {

    const [pokemonDetail, setPokemonDetail] = useState(null)

    useEffect(() => {
        fetch(pokemon.url)
            .then(res => res.json())
            .then(data => setPokemonDetail(data))
    }, [])

    return (
        <div>
            {  !pokemonDetail ?
                <img src="/pokeballLoader.png" alt="Pokeball Spinner" className="w-12 aspect-square animate-spin"/>
                :
                <div className="flex flex-col justify-center items-center">
                    <div className="border border-solid border-black rounded-3xl bg-white my-6">
                        <img className="p-6" src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name} />
                    </div>
                    <div className="flex gap-1 items-center my-6 h-2">
                        <h1 className="capitalize text-base">{pokemonDetail.name}</h1>
                        <TypeLabels pokemonTypes={pokemonDetail.types} />
                    </div>
                </div>
            }
        </div>

    )
}