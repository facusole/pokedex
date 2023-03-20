import { SearchNormal } from "iconsax-react"

export default function SearchBar({ input, setInput}) {

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return(
        <div className="relative group">
            <input value={input} onChange={handleChange} name="searchbar" id="searchbar" placeholder="Write your pokemon's name..." className="text-base bg-white w-full mt-6 px-12 py-3 rounded-full border border-solid border-black focus:outline-none focus:ring-main-red focus:ring-1 focus:border-main-red md:w-60 md:mt-0 md:py-2 lg:w-96" />
            <SearchNormal className="absolute top-[53%] md:top-2/4 md:translate-y-[-50%] lg:top-2/4 lg:translate-y-[-50%] left-5 group-focus-within:stroke-main-red" size={20}/>
        </div>
    )
}