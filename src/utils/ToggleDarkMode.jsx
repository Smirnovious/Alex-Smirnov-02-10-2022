import React, { useEffect, useState } from 'react'
import {BiSun} from 'react-icons/bi'
import {FaRegMoon} from 'react-icons/fa'

const ToggleDarkMode = () => {
    const [darkMode, setDarkMode] = useState(()=> localStorage.theme === "dark")

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
        useEffect(() => {
    const html = window.document.documentElement
    const prevTheme = darkMode ? "light" : "dark"
    html.classList.remove(prevTheme);

    const nextTheme = darkMode ? "dark" : "light"
    html.classList.add(nextTheme);

    localStorage.setItem("theme", nextTheme);
    }, [darkMode]);
    
    return (
        <button onClick={toggleDarkMode} className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full">
        {darkMode ? <BiSun className="text-yellow-500"/> : <FaRegMoon className="text-gray-500"/>}
        </button>
                      
        
    )

}
export default ToggleDarkMode
