import { useState } from "react"

const GIFsSearch = ({setSearch}) => {
    const [newSearch, setNewSearch] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(newSearch)
        setNewSearch("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="justify-center mt-3 mb-12 flex">
                <input className=" placeholder:text-slate-400 block bg-white w-96 border border-slate-300 rounded-l py-2 px-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-md" aria-label="search anything" aria-describedby="field-search" placeholder="Search for anything..." type="text" name="search" id="search" value={newSearch} onChange={(e)=> {
                setNewSearch(e.target.value)
            }}/>
                <button className="bg-indigo-600 text-white font-bold py-2 px-4 border border-indigo-600 rounded-r hover:bg-indigo-700 flex items-center justify-center">Search
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className="inline-block w-6 h-6 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
            </button>
            </div>
        </form>
    )
}
export default GIFsSearch


