import React from 'react'

const Weather5DayForecast = () => {
    const x = [1,2,3,4,5]

  return (
    <div className="flex flex-row w-1/2 mx-auto">
        {x.map((item) => (
          <div className='mt-2 rounded-xl w-28 h-28 
          mx-auto justify-around items-center dark:text-amber-200'>
            <img src='' alt="" className='w-10 mx-auto'/>
            <p className='text-lg mx-auto w-fit'>70°/103°</p>
            <p className='text-xl mx-auto w-fit'>Sun</p>

          </div>
        ))}
    </div>
  )
}

export default Weather5DayForecast