import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const handleChange = (data) => {
    setSearch(data)
  }

  return (
    <div className='flex justify-between mt-2 w-96 bg-white rounded-xl p-2 mx-auto'>
        <input  
        className='focus:outline-none'
        type="text" 
        placeholder="Search for a city" 
        value={search}
        onChange={(e) => handleChange(e.target.value)}
        />
        <BsSearch className='text-4xl my-auto'/>
    </div>
  )
}

export default SearchBar