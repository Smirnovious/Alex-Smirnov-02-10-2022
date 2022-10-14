import React from 'react'
import { Link } from 'react-router-dom'
import ToggleDarkMode from '../../../utils/ToggleDarkMode'
import {ImHeart} from 'react-icons/im'
import {AiFillHome} from 'react-icons/ai'
const NavBar = () => {
  return (
    <div className='text-2xl flex justify-between dark:bg-gray-800'>
      <p className='my-auto ml-2 dark:text-amber-200'>Abra Weather Task</p>
      <div className='flex flex-row items-center'>
          <Link to={'/'}><button className='w-10 h-10 mr-2 dark:text-amber-200'><AiFillHome/></button></Link>
          <Link to={'/favorites'}><button className='w-10 h-10 mr-2 dark:text-amber-200'><ImHeart/></button></Link>  
            <span className="absolute right-28 top-5 flex justify-center 
                      items-center w-4 h-4 text-xs font-bold text-black dark:text-white bg-white  dark:bg-yellow-500 rounded-full border- 
                      border-white">0
                      </span>
          <ToggleDarkMode/>
          <button className='w-10 h-10 mr-2 dark:text-amber-200'>C °</button>
      </div>
    </div>
  )
}

export default NavBar