import React from 'react'
import {BsSearch} from 'react-icons/bs'
import Turnstone from 'turnstone'
import { useSelector, useDispatch } from "react-redux";
import {getCity, getWeather, get5DayForecast, setCity} from "../../../redux/slices/forecastSlice";


const searchBarStyles = {
input: 'w-full h-12 border rounded-xl border-slate-300 py-2 pl-10 dark:text-amber-200 dark:bg-slate-800 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent',
clearButton: 'absolute right-4 top-3 text-amber-400 hover:text-amber-500',
listbox: 'cursor-pointer w-full bg-white sm:border sm:border-crystal-500 sm:rounded text-left sm:mt-2 p-2 sm:drop-shadow-xl dark:text-amber-200 dark:bg-slate-800 dark:border-slate-700',
}


const SearchBar = () => {
const dispatch = useDispatch();
  const listbox = [
  {
    ratio: 8,
    displayField: 'name',
    data: async (query) => {
      const data = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&q=${query}`)
      const dataJson = await data.json();     
      return dataJson.map((city, index) => {
        return {
          id: index,
          name: city.LocalizedName,
          key: city.Key,
        } 
      })
    },
  },
]



  return (
    <div className='w-1/2 mx-auto'>
    <Turnstone
        autoFocus={true}
        clearButton={true}
        debounceWait={250}
        id="autocomplete"
        listbox={listbox}
        listboxIsImmutable={true}
        matchText={true}
        noItemsMessage="We found no cities that match your search"
        placeholder="Search for a city"
        styles={searchBarStyles}
        onSelect={(item) => {
          dispatch(setCity(item && item.name))
          dispatch(getWeather(item && item.key))
          dispatch(get5DayForecast(item && item.key))
        }}
      />

      </div>
    
    
  )
}

export default SearchBar

