import React, { useState } from 'react'
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css'; 
const axios = require("axios");



const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial')
    let [responseObj, setResponseObj] = useState({});

    const uriEncodedCity = encodeURIComponent(city);

    

    // data fetch for the weather
    function getForecast(e) {
        e.preventDefault();
        const axios = require("axios");
        
        const options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/weather?q=seattle',
            params: {
                q: ''
                // lat: '0',
                // lon: '0',
                // callback: 'test',
                // id: '2172797',
                // lang: 'null',
                // units: 'imperial',
                // mode: 'xml'
            },
            headers: {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': '66f856c219msh045b1e243317d1ep1d96f7jsnca9eea58854c'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    
    // display code
    return (
        <div>
            <h2>Start searching</h2>
            
            <form onSubmit={getForecast}>
            <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button className={classes.Button} type="submit">Get Forecast</button>
            </form>
            
            <Conditions 
            responseObj={responseObj}/>
            
            
        </div>
    )
}

export default Forecast