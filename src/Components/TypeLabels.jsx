export default function TypeLabels({ pokemonTypes }) {
    if(!pokemonTypes) return null

    const colours = {
        grass: '#EEFFE3',
        poison: '#EBE3FF',
        fire: '#FFD3BB',

        normal: '#A8A77A',
        water: '#6390F0',
        electric: '#F7D02C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };

    return (

        <div className="flex flex-col gap-1 text-sm">

            <span 
                style={{backgroundColor: colours[pokemonTypes[0].type.name]}}         
                className="rounded-full px-3 py-1 mx-auto bg-white border border-solid border-black w-16 grid place-content-center">
                    {pokemonTypes[0].type.name}
            </span>

            {!pokemonTypes[1] ? null :
                <span 
                    style={{backgroundColor: colours[pokemonTypes[1].type.name]}}
                    className="rounded-full px-3 py-1 mx-auto bg-white border border-solid border-black w-16 grid place-content-center">
                        {pokemonTypes[1].type.name}
                </span>       
            }   
        </div>
    )
}