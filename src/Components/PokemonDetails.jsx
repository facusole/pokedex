import { useEffect, useState } from "react"
import TypeLabels from "./TypeLabels"

import '../css/PokemonDetails.css'

export default function PokemonDetails({ pokemon, setSelected }) {

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
                <div className="group flex flex-col justify-center items-center hover:cursor-pointer" onClick={() => setSelected(pokemonDetail)}>
                    <div className="border border-solid border-black rounded-3xl bg-white my-6 relative">
                        <img className="group-hover:border-r-[3px] group-hover:border-b-2 group-hover:border-black group-hover:rounded-3xl delay-75" src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name} />
                        <span className="absolute top-[-12px] right-0 bg-white border border-solid border-black rounded-full py-1 px-4 text-sm group-hover:border-r-[3px] group-hover:border-b-2 group-hover:border-black group-hover:rounded-3xl delay-75">{pokemonDetail.id < 100 ? ('#0' + pokemonDetail.id).slice(-5) : ('#' + pokemonDetail.id).slice(-5) }</span>
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