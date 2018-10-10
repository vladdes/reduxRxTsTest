import axios from 'axios';

const WEATHER_API_KEY = "5a757f54e39a3e15fad9efd794ef15c7";
const WEATHER_ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city: string){
    const url = `${WEATHER_ROOT_URL}&q=${city},se`;
    const requestPromise = axios.get(url);
    return {
        
        type: FETCH_WEATHER,
        payload: requestPromise
    }
}