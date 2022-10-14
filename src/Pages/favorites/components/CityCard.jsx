import React from 'react'
import { useSelector } from 'react-redux'

const CityCard = () => {
  const { favoriteCity } = useSelector((state) => state.favorites)
  return (
    <>
    <p className='content-center text-4xl mt-4 font-bold dark:text-amber-200'>Favorite Cities</p>
    <div className='flex flex-col w-1/5 mx-auto border-2 rounded-xl'>
    <div className='mt-2 rounded-xl w-full h-52 mx-auto flex flex-row justify-between items-center'>
        <img src='' alt="" className='text-9xl mx-4 dark:text-amber-200'/>
        <p className='dark:text-amber-200'>City Name</p>
            <p className='text-5xl dark:text-amber-200'>
                70°
            </p>
    </div>
    </div>
    </>
  )
}

export default CityCard