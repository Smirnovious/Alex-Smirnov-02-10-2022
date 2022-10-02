import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-gray-400 text-2xl flex justify-between'>
    <p>Abra Weather Task</p>
    <div>
        <button className='border-2 rounded p-2 ml-2'>Home</button>
        <button className='border-2 rounded p-2 ml-2'>Favorites</button>
    </div>
    </div>
  )
}

export default NavBar