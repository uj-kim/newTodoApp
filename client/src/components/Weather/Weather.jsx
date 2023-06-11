import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Weather.css";

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [airpollution, SetAirpollution]= useState(null);
    useEffect(() => {
      //openweathermap api를 이용해서 날짜 정보 가져오기(get weather info)
        const fetchWeather = async () => {
          const response = await axios.get(
            //update OpenWeaterMap API
            // you need API key, geocodes(lat & lon) of your location and to set language option.
            "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&lang={language}"
            
            
          );
          const celsius = response.data.main.temp - 273.15; //절대온도를 섭씨로 변환
          setWeather(
            {
                temp : celsius.toFixed(1),
                currentWeather : response.data.weather[0].description,
            }
          );
        };
        // 미세먼지 농도(Get AirPollution info)
        const fetchAirPollution = async () => {
            const response = await axios.get(
            //update OpenWeaterMap API
            // you need API key, geocodes(lat & lon) of your location and to set language option.
              "https://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}"
            );
            const dust = response.data.list[0].components.pm10;
            if (dust <=40)
            {SetAirpollution(`미세먼지 좋음 (${dust}μg/m³)`)} // Good
            else if(dust <= 50){
                SetAirpollution(`미세먼지 보통 (${dust}μg/m³)`) // Normal
            }
            else{
                SetAirpollution(`미세먼지 나쁨 (${dust}μg/m³)`) // Bad
            }
            
          };
        fetchWeather();
        fetchAirPollution();
    }, []);

  return (
    <div className='weather-container'>
     {weather && (
        <div>
          <p>{weather.temp}°C , {weather.currentWeather}</p>
        </div>
      )}
        {airpollution && (
            <div>
        <p>{airpollution}</p>
        </div>
      )}</div>
  )
}

export default Weather;