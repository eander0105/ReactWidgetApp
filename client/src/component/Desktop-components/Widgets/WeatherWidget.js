import React, {useState, useEffect} from 'react'
import './Widgets.css'
import axios from 'axios';
import { useTimer } from 'react-timer-hook';
import Cookies from 'js-cookie';
import {BeatLoader, ClipLoader} from "react-spinners";
import req from 'express/lib/request';

function WeatherWidget(props) {

    const [weatherData, setWeatherData] = useState(false);
    const [forcast, setForcast] = useState(false)

    // https://api.weatherbit.io/v2.0/current?lat=58.4094&lon=15.6257&lang=sv&key=1b76a232bb664b5d904fc81b0fbc1d25 , {lat: 58.4094, lon: 15.6257, lang: 'sv', key: '1b76a232bb664b5d904fc81b0fbc1d25'}
    
    const APIkey = '1b76a232bb664b5d904fc81b0fbc1d25';

    const userData = {
        lat: '58.4094',
        lon: '15.6257',
    }

    const fetchWeatherData = () => {

        // Current weather API call
        axios({
            method: 'post',
            url: 'https://api.weatherbit.io/v2.0/current',
            params: {
                key: APIkey,
                lat: userData.lat,
                lon: userData.lon,
                lang: 'sv'
            }
        }).then((res) => {
                setWeatherData(res);
                
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
                lon: userData.lon,
                lang: 'sv'
            }
        }).then((res) => {
                setForcast(res);
                
                // Start Timer to fetch data in 10 min
                const newTime = new Date()
                newTime.setSeconds(newTime.getSeconds() + 600) // Timer 10 min from now
                restart(newTime);
            }).catch((err) => {
                console.error(err);
            });

    }

    // Timer
    const {
          restart
        } = useTimer({ onExpire: () => fetchWeatherData() });
    
    useEffect(() => {
        fetchWeatherData();
    }, [])
    return (
        <div className='Widget Weather'>
            <div className='WeatherCurrent'>
                {weatherData ? 
                <div>
                    {weatherData.data.data[0].temp} &deg;C
                    <img src={require(`./icons/${weatherData.data.data[0].weather.icon}.png`)}/>
                </div> : <ClipLoader color='#007BFF'/>}
            </div>
            <div className='WeatherForcast'>

            </div>
        </div>
    )
}

export default WeatherWidget
