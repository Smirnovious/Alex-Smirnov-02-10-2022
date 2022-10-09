import React, { useEffect, useState } from 'react'

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
        <div className="dark-mode-toggle">
            <input
                type="checkbox"
                id="dark-mode-toggle"
                className="dark-mode-toggle__checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
            />
            <label htmlFor="dark-mode-toggle" className="dark-mode-toggle__label">
                <span className="dark-mode-toggle__inner" />
                <span className="dark-mode-toggle__switch" />
            </label>
        </div>
    )
}
export default ToggleDarkMode