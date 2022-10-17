import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
const API = 'xj9aLa2hN5AeujVcNIpcmEtsZ7b7GbyQ'

    export const fetchCurrentWeather = createAsyncThunk(
        'forecast/fetchCurrentWeather',
        async (cityKey) => {
            try {
                const response = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API}`)
                const currentWeather = await response.json()
                return currentWeather[0]
            } catch (error) {
                console.log(error)
            }
        }
    )
    export const fetchDailyForecast = createAsyncThunk(
        'forecast/fetchDailyForecast',
        async (cityKey) => {
            try {
                const response = await fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API}&metric=true`)
                const dailyForecast = await response.json()
                return dailyForecast.DailyForecasts
            } catch (error) {
                console.log('error', error)
            }
        }
    )
    export const fetchWeatherByGeoLocation = createAsyncThunk(
        'forecast/fetchWeatherByGeoLocation',
        async (latitude, longitude) => {
            try {
                const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API}&q=${latitude},${longitude}`)
                const location = await response.json()
                return location
            } catch (error) {
                console.log('error', error)
            }
        }
    )

const forecastSlice = createSlice({
    name: 'forecast',
    initialState: {
        city:'Tel Aviv',
        currentWeather: null,
        dailyForecast: [],
        isMetric: true,
        location: {}
    },
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload
        },
        setLocation: (state, action) => {
            state.location = action.payload
        },
        toggleTemp: (state) => {
            state.isMetric = !state.isMetric
        }
    },
    extraReducers: {
        [fetchCurrentWeather.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchCurrentWeather.fulfilled]: (state, action) => {
            state.status = 'success'
            
            state.currentWeather = action.payload
        },
        [fetchCurrentWeather.rejected]: (state) => {
            state.status = 'failed'
        },
        [fetchDailyForecast.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchDailyForecast.fulfilled]: (state, action) => {
            state.status = 'success'
            state.dailyForecast = action.payload
            
        },
        [fetchDailyForecast.rejected]: (state) => {
            state.status = 'failed'
        },
        [fetchWeatherByGeoLocation.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchWeatherByGeoLocation.fulfilled]: (state, action) => {
            state.status = 'success'
            state.location = action.payload
        },
        [fetchWeatherByGeoLocation.rejected]: (state) => {
            state.status = 'failed'
        },
    },
    }
)

export default forecastSlice.reducer
export const { setCity, setLocation, toggleTemp } = forecastSlice.actions

