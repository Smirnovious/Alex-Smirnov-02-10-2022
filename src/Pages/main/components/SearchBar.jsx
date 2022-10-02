import React from 'react'
import {BsSearch} from 'react-icons/bs'

const SearchBar = () => {
  return (
    <div className='flex justify-center mt-2'>
        <input className='rounded-xl p-4 w-96 bg-gray-200' type="text" placeholder="Search for a city" />
        <BsSearch className='text-4xl'/>
    </div>
  )
}

export default SearchBar