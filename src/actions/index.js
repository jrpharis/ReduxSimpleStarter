import axios from "axios";

const API_KEY = 'b278cecb3fc0234c4474e9532dd70ed8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEAHTER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request', request);
  

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}