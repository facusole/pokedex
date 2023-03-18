export default function PokemonDetailPageTypesLabel({ pokemonTypes }) {
    if(!pokemonTypes) return null

    const colours = {
        grass: '#EEFFE3',
        poison: '#EBE3FF',
        fire: '#FFD3BB',
        water: '#E3EFFF',
        flying: '#D7F0FF',
        bug: '#EEFFB0',

        normal: '#A8A77A',
        electric: '#F7D02C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        ground: '#E2BF65',
        psychic: '#F95587',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };

    return (

        <div className="flex gap-1 text-xl lg:text-2xl">

            <span 
                style={{backgroundColor: colours[pokemonTypes[0].type.name]}}         
                className="rounded-full px-12 py-1 mx-auto bg-white border border-solid border-black w-16 grid place-content-center capitalize group-hover:border-r-2 group-hover:border-b-[3px] group-hover:border-black group-hover:rounded-3xl delay-75">
                    {pokemonTypes[0].type.name}
            </span>

            { pokemonTypes[1] &&
                <span 
                    style={{backgroundColor: colours[pokemonTypes[1].type.name]}}
                    className="rounded-full px-12 py-1 mx-auto bg-white border border-solid border-black w-16 grid place-content-center capitalize group-hover:border-r-2 group-hover:border-b-[3px] group-hover:border-black group-hover:rounded-3xl delay-75 ">
                        {pokemonTypes[1].type.name}
                </span>       
            }   
        </div>
    )
}