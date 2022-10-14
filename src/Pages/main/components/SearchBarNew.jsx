import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  getSuggestionReq, getSuggestionRes, resetSuggestions, setText } from '../../../redux/slices/autoCompleteSlice'
import {ImCross} from 'react-icons/im'


const SearchBarNew = () => {
    const suggestions = useSelector(state => state.autoComplete.locations)
    const dispatch = useDispatch()
    const text = useSelector(state => state.autoComplete.text)

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
            await handleSubmit()
        }
    }

    const handleSubmit = async e => {
            const data = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&q=${suggestions.text}`)
            const suggestions = await data.json()
            dispatch(getSuggestionRes(suggestions))
    }
    
    //     const labelButton = () => {
    //     if (suggestions.locations.length > 0 && suggestions.text.length > 0) {
    //         return (
    //             <button
    //                 onClick={() => dispatch(resetSuggestions())}
    //             >
    //                 <ImCross className="absolute right-6 bottom-4 top-4 pl-2 pr-2 text-gray-500 hover:text-gray-700 z-11"/>
    //             </button>
    //         )
    //     }
            
    //     return (
    //         <button
    //             className="absolute right-6 bottom-4 top-4 pl-2 pr-2 text-gray-500 hover:text-gray-700 z-11"
    //             onClick={handleSubmit}>
    //             <ImCross/>
    //         </button>
    //     )
    // }
    





    const renderSuggestions = () => {
        if (text && suggestions.length === 0) {
            return (
              <ul className='absolute top-12 rounded-xl bg-white z-10 w-1/2 overflow-y-auto dark:bg-gray-400'>
                <li className='p-2'>No Cities Found</li>
                        </ul>
                )
        }
        return (
         <ul className='absolute top-12 rounded-xl bg-white z-10 w-1/2 overflow-y-auto'>
                {suggestions.map((suggestion, index) => (
                    <li key={index} className="hover:bg-amber-500 hover:cursor-pointer flex p-2 justify-between 
                    items-center border-b-2 dark:bg-gray-600 dark:border-b-amber-100"
                    >
                        <span className='dark:text-amber-200'>{suggestion.LocalizedName}</span> 
                        <span className='font-light text-slate-500 text-sm dark:text-amber-200'>{suggestion.Country.LocalizedName}</span>
                    </li>
                ))}
            </ul>
           
           
        )
    }

    return (
        <div className="w-full relative flex flex-row justify-center">
            <input
                className="border-none leading-10 rounded-xl mx-auto w-1/2 capitalize transition-all dark:placeholder-amber-200
                duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-500"
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