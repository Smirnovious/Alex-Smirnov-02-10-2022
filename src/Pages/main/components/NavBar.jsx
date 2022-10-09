import React from 'react'
import { Link } from 'react-router-dom'
import ToggleDarkMode from '../../../utils/ToggleDarkMode'

const NavBar = () => {
  return (
    <div className='text-2xl flex justify-between bg-cyan-400 dark:bg-gray-800'>
      <p className='my-auto ml-2 dark:text-amber-200'>Abra Weather Task</p>
      <div>
          <Link to={'/'}><button className='p-2 ml-2 dark:text-amber-200'>Home</button></Link>
          <Link to={'/favorites'}><button className='p-2 ml-2 dark:text-amber-200'>Favorites</button></Link>
          <ToggleDarkMode/>
      </div>
    </div>
  )
}

export default NavBar