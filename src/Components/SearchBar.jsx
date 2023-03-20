

export default function SearchBar({ input, setInput}) {

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return(
        <div>
            <input value={input} onChange={handleChange} name="searchbar" id="searchbar" placeholder="Write your pokemon's name..." className="text-base bg-white w-full mt-6 px-4 py-3 rounded-full border border-solid border-black focus:outline-none focus:ring-main-red focus:ring-1 focus:border-main-red md:w-60 md:mt-0 md:py-2 lg:w-96" />
        </div>
    )
}