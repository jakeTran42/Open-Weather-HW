import React, { Component } from 'react';

const Moods = (props) => {

    // let location = ''
    // let forecast = ''
    // let temp = 0
    // let mood = ''

    // if (props.moods.)

    return ( 
        <div style={{padding: "5px", border: "1px solid black"}}>
            <p>City: {props.moods.location}</p>
            <p>Forecast: {props.moods.forecast[0].description}</p>
            <p>Temp: {props.moods.temp}</p>
            <p>Mood: {props.moods.mood}</p>
        </div>
     );
}
 
export default Moods;