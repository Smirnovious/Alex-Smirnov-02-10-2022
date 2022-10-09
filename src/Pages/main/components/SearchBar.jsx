import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [counter, setCounter] = useState(0)
  const handleChange = async (e) => {
    setSearchTerm(e.target.value)
    setCounter(prev => prev + 1)
    const cities = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=QcpZQ2HRLYqJe0dobhTOQL7fAYwWWmKm&q=${searchTerm}`)
    const citiesJson = await cities.json()
    console.log(citiesJson[counter].LocalizedName)

  }

  return (
    <div className='flex justify-between mt-2 w-96 bg-white rounded-xl p-2 mx-auto'>
        <input  
        className='w-80 bg-transparent outline-none'
        type="text" 
        placeholder="Search for a city" 
        value={searchTerm}
        onChange={handleChange}
        />
        <BsSearch className='text-4xl my-auto'/>
    </div>
  )
}

export default SearchBar