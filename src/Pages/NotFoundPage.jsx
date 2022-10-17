import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-800 h-screen flex flex-col justify-center items-center'> 
      <h1 className='text-9xl text-center text-amber-200 dark:text-amber-200'>404</h1>
      <h1 className='text-6xl text-center text-amber-200 dark:text-amber-200'>Page Not Found</h1>
      <Link to={'/'}><button className='border-2 bg-white rounded p-4 mt-4'>Back to HomePage</button></Link>
    </div>
  )
}

export default NotFoundPage