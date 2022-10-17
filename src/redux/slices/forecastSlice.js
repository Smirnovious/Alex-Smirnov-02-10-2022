import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API = 'rA7CalKP31ZmrZRyiKiSq2QMbAGtjfHS'

    export const fetchDefaultLocation = createAsyncThunk(
        'forecast/fetchLocation',
        async (city) => {
            try {
                const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API}&q=${city}`)
                const location = await response.json()
                return {id: location[0].Key, name: location[0].LocalizedName}
            } catch (error) {
                <ToastContainer/>
            }
        }
    )
    export const fetchCurrentWeather = createAsyncThunk(
        'forecast/fetchCurrentWeather',
        async (cityKey) => {
            try {
                const response = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API}`)
                const currentWeather = await response.json()
                return currentWeather[0]
            } catch (error) {
                <ToastContainer/>
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
                <ToastContainer/>
            }
        }
    )
 

      
const forecastSlice = createSlice({
    name: 'forecast',
    initialState: {
        currentWeather: null,
        dailyForecast: [],
        isMetric: true,
        location: {},
        PageLoading: false,
    },
    reducers: {
        toggleTemp: (state) => {
            state.isMetric = !state.isMetric
        },
        setPageLoading: (state) => {
            state.PageLoading = !state.PageLoading
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
        [fetchDefaultLocation.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchDefaultLocation.fulfilled]: (state, action) => {
            state.status = 'success'
            state.location = action.payload
        },  
        [fetchDefaultLocation.rejected]: (state) => {
            state.status = 'failed'
        }
    },
    }
)

export default forecastSlice.reducer
export const { setCity, setLocation, toggleTemp, setPageLoading } = forecastSlice.actions

