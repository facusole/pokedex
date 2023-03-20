import PokemonDetailPageTypesLabel from "./PokemonDetailPageTypesLabel";
import { ArrowCircleLeft2 } from 'iconsax-react'
import '../css/PokemonDetailPage.css'
    
export default function PokemonDetailPage({ pokemon, openAnimationRef, handleDetailAnimation}) {

    return(
        <div className="lg:fixed lg:top-[95px] lg:right-0 lg:min-w-[400px] lg:mr-10 detail__closed" ref={openAnimationRef}>
            <button className="pl-3 text-base hover:text-main-red hover:stroke-main-red lg:hidden" onClick={handleDetailAnimation}>
                <span className="flex items-center transition"><ArrowCircleLeft2 size="24"/>Go back</span></button>
            {pokemon &&
                <div className="text-center font-medium">
                        <div className="h-[95.5vh] overflow-y-auto scrollbar-hide flex flex-col justify-start items-center m-2 border border-solid border-black rounded-3xl lg:h-[88vh]">
                                <div className="border border-solid border-black rounded-3xl bg-white my-4 relative">
                                    <img className="group-hover:border-r-[3px] group-hover:border-b-2 group-hover:border-black group-hover:rounded-3xl delay-75" src={pokemon.sprites.front_default} alt={pokemon.name} />
                                    <span className="absolute top-[-12px] right-0 bg-white border border-solid border-black rounded-full py-1 px-4 text-sm">{pokemon.id < 100 ? ('#0' + pokemon.id).slice(-5) : ('#' + pokemon.id).slice(-5) }</span>
                                </div>
                                <div className="gap-1 items-center h-2">
                                    <h1 className="capitalize text-xl my-2 md:text-2xl">{pokemon.name}</h1>
                                    <PokemonDetailPageTypesLabel pokemonTypes={pokemon.types} />
                                    <div className="px-6 py-6 my-6 bg-white border border-solid border-black rounded-3xl grid place-items-center gap-4">
                                        <div className="flex items-center gap-2"><span className="rounded-full border border-black px-3 py-1 w-[8ch] bg-purple-200 mx-auto">{pokemon.height*10 + 'cm'}</span><span className="rounded-full border border-black px-3 py-1 w-[8ch] bg-purple-200 mx-auto">{pokemon.weight/10 + "kg"}</span></div>
                                        <div className="flex items-center gap-2"><span className="rounded-full border border-black px-3 py-1 w-[8ch] mx-auto">Height</span><span className="rounded-full border border-black px-3 py-1 w-[8ch] mx-auto">Weight</span></div>
                                    </div>
                                    <div className="px-6 py-4 my-2 bg-white border border-solid border-black rounded-3xl">
                                        <h3>Stats</h3>
                                        <ul>
                                            <li className="flex justify-between items-center gap-8 my-2"><span className="rounded-full border border-black px-4 py-2 w-[12ch] md:text-2xl">HP</span> <span className="rounded-full border border-black px-4 py-2 w-[6ch] bg-purple-200 mx-auto">{pokemon.stats[0].base_stat}</span></li>
                                            <li className="flex justify-between items-center gap-8 my-2"><span className="rounded-full border border-black px-4 py-2 w-[12ch] md:text-2xl">Attack</span> <span className="rounded-full border border-black px-4 py-2 w-[6ch] bg-purple-200 mx-auto">{pokemon.stats[1].base_stat}</span></li>
                                            <li className="flex justify-between items-center gap-8 my-2"><span className="rounded-full border border-black px-4 py-2 w-[12ch] md:text-2xl">Defense</span> <span className="rounded-full border border-black px-4 py-2 w-[6ch] bg-purple-200 mx-auto">{pokemon.stats[2].base_stat}</span></li>
                                            <li className="flex justify-between items-center gap-8 my-2"><span className="rounded-full border border-black px-4 py-2 w-[12ch] md:text-2xl">S-Attack</span> <span className="rounded-full border border-black px-4 py-2 w-[6ch] bg-purple-200 mx-auto">{pokemon.stats[3].base_stat}</span></li>
                                            <li className="flex justify-between items-center gap-8 my-2"><span className="rounded-full border border-black px-4 py-2 w-[12ch] md:text-2xl">S-Defense</span> <span className="rounded-full border border-black px-4 py-2 w-[6ch] bg-purple-200 mx-auto">{pokemon.stats[4].base_stat}</span></li>
                                            <li className="flex justify-between items-center gap-8 my-2"><span className="rounded-full border border-black px-4 py-2 w-[12ch] md:text-2xl">Speed</span> <span className="rounded-full border border-black px-4 py-2 w-[6ch] bg-purple-200 mx-auto">{pokemon.stats[5].base_stat}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
            }  
        </div>
    )
}