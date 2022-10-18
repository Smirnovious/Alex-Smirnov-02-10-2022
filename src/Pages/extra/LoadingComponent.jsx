import React from 'react'
import ReactLoading from 'react-loading';

// This Component is for the Loading Animation of a component
const Loading = () => {
  return (
  <div className='flex flex-col justify-center items-center h-screen text-white'>
    <p className='text-5xl text-center dark:text-amber-200'>Loading, Just A Sec</p>
    <div className='text-center'>
      <ReactLoading type='balls' color="#fff" />
    </div>      
  </div>
   
  )
}

export default Loading