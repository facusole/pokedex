export default function PokemonDetailPageTypesLabel({ pokemonTypes }) {
    if(!pokemonTypes) return null

    const colours = {
        grass: '#EEFFE3',
        poison: '#EBE3FF',
        fire: '#FFD3BB',
        water: '#E3EFFF',
        flying: '#D7F0FF',
        bug: '#EEFFB0',
        normal: '#EBEAE0',
        electric: '#fdf4ce',
        ice: '#daf1f0',
        fighting: '#f6d6d5',
        ground: '#f7edd4',
        psychic: '#fdcedd',
        rock: '#f3efd8',
        ghost: '#e5dfec',
        dragon: '#dbcdfe',
        dark: '#ebe5e0',
        steel: '#e1e1ea',
        fairy: '#f2d9e6',
    };

    return (

        <div className="flex gap-1 text-xl lg:text-2xl">

            <span 
                style={{backgroundColor: colours[pokemonTypes[0].type.name]}}         
                className="md:text-2xl rounded-full px-12 py-1 mx-auto bg-white border border-solid border-black w-16 grid place-content-center capitalize group-hover:border-r-2 group-hover:border-b-[3px] group-hover:border-black group-hover:rounded-3xl delay-75">
                    {pokemonTypes[0].type.name}
            </span>

            { pokemonTypes[1] &&
                <span 
                    style={{backgroundColor: colours[pokemonTypes[1].type.name]}}
                    className="md:text-2xl rounded-full px-12 py-1 mx-auto bg-white border border-solid border-black w-16 grid place-content-center capitalize group-hover:border-r-2 group-hover:border-b-[3px] group-hover:border-black group-hover:rounded-3xl delay-75 ">
                        {pokemonTypes[1].type.name}
                </span>       
            }   
        </div>
    )
}