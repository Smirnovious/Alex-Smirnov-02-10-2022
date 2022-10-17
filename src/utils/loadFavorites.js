// Helper Function to Load Favorites from Local Storage

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('favorites')
        if (serializedState === null) {
            return []
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}