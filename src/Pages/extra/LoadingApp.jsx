import React from 'react'
import loadingAnimation from '../../assets/loading.webp'

// This Component is for the Loading Animation of the complete App
const LoadingApp = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-50'>
        <p className='text-5xl text-center'>Loading Weather</p>
        <div className='text-center'>
            <img src={loadingAnimation} alt="loading" />
        </div>
    </div>
  )
}

export default LoadingApp