import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getCity = createAsyncThunk(
    'forecast/getCity',
    async (city) => {
        const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`)
        const data = await response.json()
        console.log(data[0].Key)
        return data[0].Key
    },
)

  export const getWeather = createAsyncThunk(
        'forecast/getWeather',
        async (cityKey) => {
            const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}
            `)
            const data = await response.json()
            console.log(data)
            return data 
        }
    )
    export const get5DayForecast = createAsyncThunk(
        'forecast/get5DayForecast',
        async (cityKey) => {
            const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&metric=true`)
            const data = await response.json()
            console.log(data)
            return data
        }
    )
        
const forecastSlice = createSlice({
    name: 'forecast',
    initialState: {
        city: 'Tel-Aviv',
        weather: {},
        fiveDayForecast: [],
        status: null
    },
    extraReducers: {
        [getCity.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getCity.fulfilled]: (state, action) => {
            state.status = 'success'
            state.city = action.payload
        },
        [getCity.rejected]: (state, action) => {
            state.status = 'failed'
        },
        [getWeather.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getWeather.fulfilled]: (state, action) => {
            state.status = 'success'
            state.weather = action.payload
        },
        [getWeather.rejected]: (state, action) => {
            state.status = 'failed'
        },
        [get5DayForecast.pending]: (state, action) => {
            state.status = 'loading'
        },
        [get5DayForecast.fulfilled]: (state, action) => {
            state.status = 'success'
            state.fiveDayForecast = action.payload
        },
        [get5DayForecast.rejected]: (state, action) => {
            state.status = 'failed'
        }  
    },


})

export default forecastSlice.reducer