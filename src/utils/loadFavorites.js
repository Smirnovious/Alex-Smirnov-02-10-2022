export const loadFavorites = () => {
    try {
        const favoritesCities = localStorage.getItem('favorites')
        if (favoritesCities === null) {
            return []
        } else {
        return JSON.parse(favoritesCities)
        }
    } catch (err) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const favoritesCities = JSON.stringify(state)
        localStorage.setItem('favorites', favoritesCities)
    } catch (err) {
        console.log(err)
    }
}