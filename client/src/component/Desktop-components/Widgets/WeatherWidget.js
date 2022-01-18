import React, {useState, useEffect} from 'react'
import './Widgets.css'
import axios from 'axios';
import { useTimer } from 'react-timer-hook';
import Cookies from 'js-cookie';
import {BeatLoader, ClipLoader} from "react-spinners";

function WeatherWidget() {

    const [weatherData, setWeatherData] = useState(false);
    const [forecast, setForecast] = useState(false);

    // https://api.weatherbit.io/v2.0/current?lat=58.4094&lon=15.6257&lang=sv&key=1b76a232bb664b5d904fc81b0fbc1d25 , {lat: 58.4094, lon: 15.6257, lang: 'sv', key: '1b76a232bb664b5d904fc81b0fbc1d25'}
    
    const APIkey = '1b76a232bb664b5d904fc81b0fbc1d25';

    const userData = {
        lat: Cookies.get('userlat'),
        lng: Cookies.get('userlng')
    }

    const fetchWeatherData = () => {
        // Current weather API call
        axios({
            method: 'post',
            url: 'https://api.weatherbit.io/v2.0/current',
            params: {
                key: APIkey,
                lat: userData.lat,
                lon: userData.lng,
            }
        }).then((res) => {
                setWeatherData(res.data.data);
                // Start Timer to fetch data in 10 min
                const newTime = new Date()
                newTime.setSeconds(newTime.getSeconds() + 600) // Timer 10 min from now
                restart(newTime);
            })
            .catch((err) => {
                console.error(err);
            });

        //Coming week forcast API call
        axios({
            method: 'post',
            url: 'https://api.weatherbit.io/v2.0/forecast/daily',
            params: {
                key: APIkey,
                lat: userData.lat,
                lon: userData.lng,
                days: 7
            }
        }).then((res) => {
                setForecast(res.data.data);
                const newTime = new Date()
                newTime.setSeconds(newTime.getSeconds() + 600) // Timer 10 min from now
                restart(newTime);
            }).catch((err) => {
                console.error(err);
            });

    }

    const loadIcon = (iconCode = 'a01d') => {
        return require(`./icons/${iconCode}.png`);
    }

    // Timer
    const {
          restart
        } = useTimer({ onExpire: () => fetchWeatherData() });
    
    useEffect(() => {
        fetchWeatherData();
    }, [])

    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const d = new Date();    

    return (
        <div className='Widget Weather' >                  
            {weatherData ? 
            <div className='WeatherCurrent'>
                <label className='CityLabel'>
                    {weatherData[0].city_name}
                </label>
                <div className='WeatherInfo'>
                    <div className='WeatherDesc'>
                        <img className='WeatherIcon' src={loadIcon(weatherData[0].weather.icon).default} alt='weathericon'/>
                        <p className='WeatherText'>
                            {weatherData[0].weather.description}   
                        </p>
                    </div>
                    <div className='WeatherTemp'>
                        <p className='CurrentDate'>
                            {weekday[d.getDay()]} {`${d.getMonth() + 1}/${d.getDate()}`}
                        </p>
                        <p className='CurrentTemp'>
                            {weatherData[0].temp}&deg;C
                        </p>
                        <div className='HighLowTemp'>
                            {forecast ? 
                                <p>
                                    H: {forecast[0].high_temp}&deg; L: {forecast[0].low_temp}&deg;
                                </p> : <BeatLoader color='#007BFF'/>}
                        </div>
                    </div>                                                      
                </div>
            </div> : <ClipLoader color='#007BFF'/>}          
            {forecast ?
                <div className='WeatherForecast'>
                    
                    {forecast.slice(1).map((item, index) => {
                        return(
                            <div className='ForecastDay' key={item.datetime.slice(8)}>
                                <p className='ForecastWeekDay'>
                                    {weekday[(d.getDay() + index + 1) % 7]}
                                </p>
                                <p className='ForecastDate'>
                                    {item.datetime.slice(5).replace('-', '/')}
                                </p>
                                    <img src={loadIcon(item.weather.icon).default} alt='weatherIcon'/>
                                <p className='ForecastTemp'>
                                    {item.high_temp}&deg;                            
                                </p>
                            </div>
                        )       
                    })}
                </div> : <BeatLoader color='#007BFF'/>
            }
            
        </div>
    )
}

export default WeatherWidget
