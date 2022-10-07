import React from 'react'

const Weather5DayForecast = () => {
    const x = [1,2,3,4,5]

  return (
    <div className="flex flex-row w-1/2 mx-auto">
        {x.map((item) => (
          <div className='border-2 bg-yellow-200 mt-2 rounded-xl w-28 h-28 mx-auto justify-around items-center'>
    </div>
        ))}
    </div>
  )
}

export default Weather5DayForecast