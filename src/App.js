import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Weather from './Weather.js';
import Moods from './Moods.js'

require('dotenv').config()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      location: 'San Francisco',
      weather: '',
      temp: '',
      mood: '',
      moods: []
     }
  }

  componentWillMount() {
    this.getWeather()
    if(localStorage.getItem('moods')) {
      let stored_moods = JSON.parse(localStorage.getItem('moods'))
      this.setState({moods: stored_moods})
    }
  }

  getWeather = (city) => {
    const api_key = process.env.WEATHER_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city || this.state.location}&appid=53d6f7e7ee62c39b846d7f08015d35ca&units=Imperial`
    fetch(url)
        .then(res => res.json())
        .then(json => {
            if(json.name) {
              this.setState({weather: json.weather, temp: json.main.temp})
            }
            // console.log(json)
        })
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({location: e.target.value})
    this.getWeather(e.target.value)
  }

  // Need Fixing
  handleSubmit = (e) => {
    e.preventDefault()
    // let new_moods = JSON.stringify({location: this.state.location, weather: this.state.weather, temp: this.state.temp, mood: this.state.mood})
    // let moods_to_store = {...JSON.stringify(this.state.moods), new_moods}
    // localStorage.setItem('moods', moods_to_store)
    const new_mood = {location: this.state.location, forecast: this.state.weather[0].description, temp: this.state.temp, mood: this.state.mood}
    const all_moods = [...this.state.moods, new_mood]
    this.setState({moods: all_moods})
  }


  render() { 
    // console.log(this.state)
    console.log(localStorage.getItem('moods'))
    return ( 
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <div>
          <form onSubmit={this.handleSubmit}>
            <p>Weather</p>
            <input 
              type='text'
              name='location'
              value={this.state.location}
              onChange={this.handleChange}
              style={{margin: "20px", padding: "5px"}}
              placeholder="Where are you?"
            />
            <Weather cur_weather={this.state} />
            <p>Mood</p>
            <input 
              type='text'
              name='location'
              value={this.state.mood}
              onChange={e => this.setState({mood: e.target.value})}
              style={{margin: "20px", padding: "5px"}}
              placeholder="Whats your mood?"
            />
          <input type="submit" value="Submit" />
          </form>
          <div>
            {this.state.moods.map((mood) => <Moods moods={mood} />)}
          </div>
        </div>
      </div>
     );
  }
}

export default App;
