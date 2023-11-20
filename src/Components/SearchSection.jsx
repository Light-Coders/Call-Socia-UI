import React, { useState } from 'react'
import search from '../assets/search.jpeg'
import Searchbar from './Searchbar'
import SearchResult from './SearchResult'

function SearchSection() {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState("")

  return (
    <div className="flex flex-col md:flex-row items-center justify-around bg-sky-300 p-5 md:p-10">
      <img src={search} alt="" className='h-64 md:h-96 shadow-2xl mb-5 md:mb-0'/>
      <div className='flex flex-col w-full md:w-2/5 md:justify-center sm:text-center justify-center gap-5'>
        <h1 className='text-4xl md:text-6xl font-bold text-white'>Search your college mates!</h1>
        <div className='relative'>
          <Searchbar setResults={setResults} setQuery={setQuery} query={query}/>
          <SearchResult results={results} query={query}/>
        </div>
      </div>
    </div>
  )
}

export default SearchSection
