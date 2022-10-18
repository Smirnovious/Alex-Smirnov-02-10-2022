import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { isLoadingFavorites, removeFavorite } from '../../../redux/slices/favoritesSlice'
import Loading from '../../extra/LoadingComponent'
import { useNavigate } from 'react-router-dom'
import { fetchCurrentWeather, fetchDefaultLocation } from '../../../redux/slices/forecastSlice'

//SweetAlert2 for error handling
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
//

const API = 'xrlLYOoZkeV9knckO4YoNW44AXKv8fFu'

const CityCards = () => {
    const {favoriteCities} = useSelector(state => state.favorites)
    const {isLoading} = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    const [FavCitiesTemps, setFavCitiesTemps] = useState([]) 
    const isMetric = useSelector(state => state.forecast.isMetric)
    const navigate = useNavigate()
    

    useEffect(() => {
          fetchFavCitiesWeather()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchFavCitiesWeather = async () => {
      dispatch(isLoadingFavorites(true))
      const favTemps = {}
      try {
        for (let favoriteCity of favoriteCities) {
          const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${favoriteCity.id}?apikey=${API}`)
          const weatherObj = await response.json()
          favTemps[favoriteCity.id] = weatherObj[0]
          }
        setFavCitiesTemps(favTemps)
        dispatch(isLoadingFavorites(false))
      } catch (error) {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Unable to Load Favorite Cities',
          })
      }
    }
    

    const navigateToForecast = (city) => {
      dispatch(fetchDefaultLocation(city.name))
      dispatch(fetchCurrentWeather(city.id))
      navigate(`/forecast/${city.id}`)
    }

    // Rendering 
    if(favoriteCities.length === 0) {
      return (
        <div className="flex justify-center items-center h-full">
          <p className="text-5xl dark:text-amber-200">No favorites yet</p>
        </div>
      )
    } else if(isLoading) { 
        return <Loading />
    } else {
        return (
          <>
          <p className='text-3xl dark:text-amber-200 mx-auto w-fit mt-3'>Favorite Cities</p>
          <div className='grid grid-cols-1  lg:grid-cols-3 items-center justify-center '>
            {favoriteCities.map((favorite, index) => (
              <div key={index} className='flex flex-col m-2 justify-between items-centerbg-slate-700 
                  text-white rounded-xl h-32  dark:bg-gray-500 dark:text-amber-200'>
                 <p className='text-3xl'>{favorite.name}</p>
                 <p className='hover:cursor-pointer' onClick={()=> navigateToForecast(favorite)}>Go To City Page</p>
                 <p className='text-4xl'>{isMetric ? Math.floor(FavCitiesTemps[favorite.id]?.Temperature.Metric.Value) :  Math.floor(FavCitiesTemps[favorite.id]?.Temperature.Imperial.Value)}°</p>
                 <button className="font-bold text-red-500 hover:cursor-pointer self-end mr-2" onClick={() => dispatch(removeFavorite(favorite))}>Remove</button>
              </div>
            ))}
          </div>
          </>
        )}}

export default CityCards