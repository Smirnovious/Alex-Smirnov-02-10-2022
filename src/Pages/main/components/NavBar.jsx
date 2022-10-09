import React from 'react'

const NavBar = () => {
  return (
    <div className='text-2xl flex justify-between'>
    <p className='my-auto ml-2'>Abra Weather Task</p>
    <div>
        <button className='p-2 ml-2'>Home</button>
        <button className='p-2 ml-2'>Favorites</button>
    </div>
    </div>
  )
}

export default NavBar