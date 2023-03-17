import PokemonDetailPageTypesLabel from "./PokemonDetailPageTypesLabel";

export default function PokemonDetailPage({ pokemon }) {

    if (!pokemon) return;

    return(
        <div className="lg:fixed lg:top-[100px] lg:right-0 lg:min-w-[400px] lg:mr-10">
            <div className="flex flex-col justify-center items-center">
                    <div className="border border-solid border-black rounded-3xl bg-white my-6 relative">
                        <img className="group-hover:border-r-[3px] group-hover:border-b-2 group-hover:border-black group-hover:rounded-3xl delay-75" src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <span className="absolute top-[-12px] right-0 bg-white border border-solid border-black rounded-full py-1 px-4 text-sm">{pokemon.id < 100 ? ('#0' + pokemon.id).slice(-5) : ('#' + pokemon.id).slice(-5) }</span>
                    </div>
                    <div className="gap-1 items-center my-6 h-2">
                        <h1 className="capitalize text-base">{pokemon.name}</h1>
                        <PokemonDetailPageTypesLabel pokemonTypes={pokemon.types} />
                    </div>
                </div>
        </div>
    )
}