import PokemonList from "./Components/PokemonList"
import SearchBar from "./Components/SearchBar"


function App() {

  return (
    <div className="font-main font-normal text-xl p-6 bg-background ">
      <nav className="md:flex md:items-center md:justify-between lg:gap-5 lg:justify-start sticky top-0 z-50 bg-background py-6">
        <h1 className="text-base font-light md:text-2xl md:font-medium">Know everything about your <span className="rounded-full bg-main-red border border-solid border-black px-6 py-2 text-white text-base md:font-normal md:px-4">Pokemon!</span></h1>
        <SearchBar/>
      </nav>
      <PokemonList />
    </div>
  )
}

export default App
