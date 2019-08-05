import React, { Component } from 'react';

const Weather = (props) => {
    // console.log(props.cur_weather.weather[0])

    let forecast = ''
    let temp = 0
    let icon = ''

    if(props.cur_weather.weather[0]) {
        forecast = props.cur_weather.weather[0].description
        temp = props.cur_weather.temp
        icon = `http://openweathermap.org/img/wn/${props.cur_weather.weather[0].icon}@2x.png`
    }

    return (
        <div style={{padding: '10px', border: '2px solid black', background: '#605b6b'}}>
            <div>
                <p style={{fontSize: '1.3em', color: '#3eb07b'}}>Current Weather </p> <p>'{forecast}'</p>
                <p style={{fontSize: '1.3em', color: '#3eb07b'}}>Current Temperature </p> <p>{temp}</p>∘F
            </div>
            <img src={icon} />
        </div>
     );
}
 
export default Weather;