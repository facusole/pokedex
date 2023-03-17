import { useEffect, useState, useRef, useCallback } from "react"

import PokemonDetails from './PokemonDetails'

export default function PokemonList() {

    const LIMIT = 20
    const [offset, setOffset] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const [allPokemons, setAllPokemons] = useState([])

    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`)
        .then(res => res.json()) 
        .then(data => {
          setAllPokemons([...allPokemons, ...data.results])
          setIsLoading(false)
        })
    }, [offset])

    const observer = useRef();
    const lastPokemonItemRef = useCallback(
      (node) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setOffset((prev) => (prev < 1400) ? prev + LIMIT : prev);
          }
        });
        if (node) observer.current.observe(node);
      },
      [isLoading]
    );
    
    return (
        <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-3 lg:w-2/3">
            {allPokemons.map((pokemon)=>{return(
                <div key={pokemon.name} ref={lastPokemonItemRef}>
                    <PokemonDetails pokemon={pokemon}/>
                </div>
            )})}
        </div>
    )
}