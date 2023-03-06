import PokemonDetails from './PokemonDetails'

export default function PokemonList({ pokemons }) {

    return (
        <div className="grid grid-cols-2 place-items-center gap-4">
            {pokemons.map((pokemon)=>{return(
                <PokemonDetails key={pokemon.name} pokemon={pokemon}/>
            )})}
        </div>
    )
}