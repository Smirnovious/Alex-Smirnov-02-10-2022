import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  getSuggestionReq, getSuggestionRes, resetSuggestions, setText } from '../../../redux/slices/autoCompleteSlice'



const SearchBarNew = () => {
    const suggestions = useSelector(state => state.autoComplete.locations)
    const dispatch = useDispatch()

    const handleChange = async e => {
        const value = e.target.value
        dispatch(setText(value))
        if (value.length > 0) {
            dispatch(getSuggestionReq())
            const data = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&q=${value}`)
            const suggestions = await data.json()
            dispatch(getSuggestionRes(suggestions))
        } else {
            dispatch(resetSuggestions())
        }
    }

        const handleKeyPress = async e => {
        if (e.charCode === 13 || e.key === 'Enter') {
            e.preventDefault()
            console.log('enter pressed')
            await handleSubmit()
        }
    }

    const handleSubmit = async e => {
            const data = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&q=${suggestions.text}`)
            const suggestions = await data.json()
            dispatch(getSuggestionRes(suggestions))
        
    }



    // const suggestionSelected = async locationRawData => {
    //     dispatch(resetSuggestions())
    //     dispatch(setText(locationRawData.LocalizedName))
    // }

    const renderSuggestions = () => {
        if (suggestions.length === 0) {
            return null
        }
        return (
            <ul className='absolute right-0 left-0 bg-white z-10 w-1/2'>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>
                        <span>{suggestion.LocalizedName}</span> <span className='font-light text-slate-500 text-sm'>{suggestion.Country.LocalizedName}</span>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div className="hero__search search">
            <input
                className="border-none leading-10 rounded-xl w-1/2 capitalize transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                type="text"
                placeholder="Type a city name"
                onChange={handleChange}
                value={suggestions.text}
                onKeyPress={handleKeyPress}
            />
             {renderSuggestions()} 
           
        </div>
    )
}

export default SearchBarNew