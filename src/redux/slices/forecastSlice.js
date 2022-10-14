import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

    
    export const fetchCurrentWeather = createAsyncThunk(
        'forecast/fetchCurrentWeather',
        async (cityKey) => {
            try {
                const response = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}`)
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
                const response = await fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&metric=true`)
                const dailyForecast = await response.json()
               
                return dailyForecast.DailyForecasts
            } catch (error) {
                console.log(error)
            }
        }
    )

const forecastSlice = createSlice({
    name: 'forecast',
    initialState: {
        city: 'Tel Aviv',
        currentWeather: null,
        dailyForecast: [],
        isMetric: true,
    },
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload
        },
        setIsMetric: (state, action) => {
            state.isMetric = action.payload
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
        }


    },
    }
)

export default forecastSlice.reducer
export const { setCity } = forecastSlice.actions

