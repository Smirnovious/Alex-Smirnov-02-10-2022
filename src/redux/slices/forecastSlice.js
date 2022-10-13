import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

    // export const getCity = createAsyncThunk(
    // 'forecast/getCity',
    // async (city) => {
    //     const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`)
    //     const data = await response.json()
    //     const responseWeather = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${data[0].Key}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}`)
    //     const dataWeather = await response.json()
    //     console.log(dataWeather[0])
    //     console.log(responseWeather)
    //     return dataWeather
        
    // },
    // )

    export const getWeather = createAsyncThunk(
        'forecast/getWeather',
        async (cityKey) => {   
            try {
                const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process
                .env.REACT_APP_WEATHER_API_KEY}`)
                const data = await response.json()
                console.log(data)
                return data
            } catch (error) {
                console.log(error)
            }
        }
    )

    export const get5DayForecast = createAsyncThunk(
        'forecast/get5DayForecast',
        async (cityKey) => {
            try {
            const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&metric=true`)
            const data = await response.json()
            console.log(data.DailyForecasts)
            return data.DailyForecasts
            } catch (error) {
                console.log(error)
            } 
        }
    )
        
const forecastSlice = createSlice({
    name: 'forecast',
    initialState: {
        city: 'Tel Aviv',
        weather: {},
        fiveDayForecast: [],
        status: null,
        weatherIcon: null,
    },
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload
        }
    },
    extraReducers: {
        [getWeather.pending]: (state) => {
            state.status = 'loading'
        },
        [getWeather.fulfilled]: (state, action) => {
            state.status = 'success'
            state.weather = action.payload
        },
        [getWeather.rejected]: (state) => {
            state.status = 'failed'
        },
        [get5DayForecast.pending]: (state) => {
            state.status = 'loading'
        },
        [get5DayForecast.fulfilled]: (state, action) => {
            state.status = 'success'
            state.fiveDayForecast = action.payload
        },
        [get5DayForecast.rejected]: (state) => {
            state.status = 'failed'
        }  
    },
    }
)

export default forecastSlice.reducer
export const { setCity } = forecastSlice.actions

