import { useState, useRef } from "react"
import PokemonList from "./Components/PokemonList"
import PokemonDetailPage from "./Components/PokemonDetailPage"
import SearchBar from "./Components/SearchBar"


function App() {

  const [input, setInput] = useState('')
  const [selected, setSelected] = useState()

  const openAnimationRef = useRef()

  const handleDetailAnimation = () => {
    if(!openAnimationRef.current) return
    openAnimationRef.current.classList.toggle('detail__open');
  }

  
  const scrollToTop = () => window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    })

  return (
    <div className="font-main font-normal text-xl bg-background min-h-screen">
      <nav className="md:flex md:items-center md:gap-4 lg:gap-5 lg:justify-start sticky top-0 z-50 bg-background p-6 border-b-[1px] border-black">
        <h1 className="text-base font-light md:text-2xl md:font-medium">Know everything about your <button onClick={scrollToTop} className="rounded-full bg-main-red border border-solid border-black px-6 py-2 text-white text-base md:font-normal md:px-4">Pokemon!</button></h1>
        <SearchBar input={input} setInput={setInput}/>
      </nav>
      <div className="">
        <PokemonList filterCondition={input} setSelected={setSelected} handleDetailAnimation={handleDetailAnimation} />
        <PokemonDetailPage pokemon={selected} openAnimationRef={openAnimationRef} handleDetailAnimation={handleDetailAnimation} />
      </div>
    </div>
  )
}

export default App
