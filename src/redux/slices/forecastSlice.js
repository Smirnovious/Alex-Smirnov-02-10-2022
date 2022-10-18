import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// SweetAlret2 for handeling errors
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
//


const API = 'DAVUFyy77kCRYxy8JEsgSoncnbndDHBd'

    export const fetchDefaultLocation = createAsyncThunk(
        'forecast/fetchLocation',
        async (city) => {
            try {
                const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API}&q=${city}`)
                const location = await response.json()
                return {id: location[0].Key, name: location[0].LocalizedName}
            } catch (error) {
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'There was an error, come back later!',
                    footer: 'Contact alex0401@gmail.com if the problem persists'
                  }).then(() => {
                    window.history.back()
                    })
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
                MySwal.fire({
                    title: 'Error',
                    text: 'Unable to fetch forecast',
                    icon: 'error',
                    confirmButtonText: 'OK'
                }).then(() => {
                window.history.back()
                })
                
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
                MySwal.fire({
                    title: 'Error',
                    text: 'Unable to fetch forecast',
                    icon: 'error',
                    confirmButtonText: 'OK'
                }).then(() => {
                window.history.back()
                })
                
            }
        }
    )
    export const fetchGeoLocation = createAsyncThunk(
        'forecast/fetchGeoLocation',
        async (position) => {
            
        }
    )
      
const forecastSlice = createSlice({
    name: 'forecast',
    initialState: {
        currentWeather: null,
        dailyForecast: [],
        isMetric: true,
        location: {},
        pageLoading: true,
    },
    reducers: {
        toggleTemp: (state) => {
            state.isMetric = !state.isMetric
        },
        setPageLoading: (state) => {
            state.pageLoading = !state.pageLoading
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

