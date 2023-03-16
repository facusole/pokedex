import PokemonDetails from './PokemonDetails'

export default function PokemonList({ pokemons, showDetail, pokemonRef }) {

    return (
        <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-3 lg:w-2/3">
            {pokemons.map((pokemon)=>{return(
                <PokemonDetails onClick={showDetail} ref={pokemonRef} key={pokemon.name} pokemon={pokemon}/>
            )})}
        </div>
    )
}