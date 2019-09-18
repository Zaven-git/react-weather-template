import React from 'react';
import Titles from './components/title/Tittles';
import Form from './components/form/Form';
import Weather from './components/Weather/Weather';
import './App.css';
const API_KEY = "63eda84e15eb6d15e0fe68bf8ca19733";

class App extends React.Component{

  state = {
    temperature:null,
    city:null,
    country:null,
    humidity:null,
    description:null,
    error:null,
  }
  
  getWeather = async (event) => {
    try{
      event.preventDefault();
      const city = event.target.elements.city.value;
      const country = event.target.elements.country.value;
      const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await resp.json();
      if (city && country){
        this.setState ({
          temperature: data.main.temp,
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          description:data.weather[0].description,
          error:'',
        });
      }else{
        this.setState ({
          error:'Please enter the name of City or Country',
        });
      }
    }
    catch(err){
      this.setState ({
        error:' City or Country name are invalid',
      });
    }
  };
  
  render (){
    const {temperature,city,country,humidity,description,error} = this.state;
    return (
      <div id='main'>
        <Titles/>
        <Form 
        getWeather = {this.getWeather}/>
        <Weather
        temperature = {temperature}
        city = {city}
        country = {country}
        humidity = {humidity}
        description = {description}
        error = {error}/>
      </div>
    );
  };

};

export default App;
