import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        const fetchWeather = async () => {
          const response = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather?lat=37.5666791&lon=126.9782914&appid=51bff0e1fc5a8abf047d9b8c7c7234ea&lang=kr"
            
          );
          console.log(response.data);
          const celsius = response.data.main.temp - 273.15; //절대온도를 섭씨로 변환
          setWeather(
            {
                temp : celsius.toFixed(1),
                currentWeather : response.data.weather[0].description,
            }
          );
        };
        fetchWeather();
    }, []);
    console.log(weather);

  return (
    <div className='weather-container'>
     {weather && (
        <div>
          <p>오늘의 날씨: {weather.currentWeather}</p>
          <p>현재 온도: {weather.temp}°C</p>
        </div>
      )}</div>
  )
}

export default Weather