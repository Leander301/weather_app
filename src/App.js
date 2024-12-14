import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Current from './Components/Current';
import Forecast from './Components/Forecast';
import '../node_modules/bootstrap/dist/js/bootstrap';

function App() {

  const [city, setCity] = useState();
  const [clickedCity, setClickedCity] = useState();
  const [citySuggestion, setCitySuggestion] = useState([]);
  const [currentWeather, setCurrent] = useState();
  const [forecastWeather, setForecast] = useState();
  const [location, setLocation] = useState();

  const autoCompURL = 'https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q=';
  const WeatherURL = (city) => `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`;

  useEffect (() => {
    if (city && city.length > 3){
      fetchAutoCompAPI();
    } 
  }, [city]);

  const fetchAutoCompAPI = async () => {
    try {
      const response = await axios.get(autoCompURL + city);
      const resp = response.data;
      console.log("api call", resp);
      const cityData = resp.map((data) => {
        return `${data.name}, ${data.region}, ${data.country}`;
      });
      setCitySuggestion(cityData);
    } catch(e) {
      console.log('error', e);
    }
  };

  const handleSelectedCity = (city) => {
    console.log('Clicked City:', city);
    setClickedCity(city);
    fetchWeatherAPI(city);
    setCitySuggestion([]);
  };

  const fetchWeatherAPI = async (city) => {
    try {
      const response = await axios.get(WeatherURL(city));
      const resp = response.data;
      // console.log(resp);
      setCurrent(resp.current);
      setForecast(resp.forecast);
      setLocation(resp.location);
      console.log("Current: ", resp.current);
      console.log("Forecast: ", resp.forecast);
      console.log("Location: ", resp.location);
    } catch(e) {
      console.log("Weather API Error", e);
    }
  };

  return (

    <div className="container bg-success p-5 mt-5 rounded">
      <input type="text" value={clickedCity}
        className="form-control"
        onChange={(e) => {
          setCity(e.target.value);
          if (e.target.value === "") {
            setCurrent();
            setForecast();
            setLocation();
            setClickedCity();
          }
        }} />
      {/* {city && <h4>{city}</h4>} */}
      {citySuggestion && citySuggestion.map((data, index) => {
        return <div key={index} className='text-center bg-info rounded p-1 bg-opacity-10 border border-info border-opacity-25 text-white'
          style={{ cursor: 'pointer' }}
          onClick={() => handleSelectedCity(data)}>
          {data}
        </div>
      })}
      {currentWeather && <Current currentWeather={currentWeather} location={location} />}
      {forecastWeather && <Forecast forecastWeather={forecastWeather} location={location} />}
    </div>

  );

}

export default App;
