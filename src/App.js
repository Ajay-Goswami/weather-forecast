import './App.css';
import React, { useState } from 'react';
import useRequest from './hooks/useRequest';
import styled from 'styled-components';

// React toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Search from './components/Search';

function App() {
  const [searchResult, setSearchResult] = useState('Dehradun');
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${searchResult}&days=10&aqi=yes&alerts=no`;
  const { data } = useRequest(url);

  return (
    <div>
      <ToastContainer />
      <h2 style={{ margin: '30px 0px' }}>WeatherApp</h2>
      <Search setSearchResults={setSearchResult} />
      {Object.keys(data).length !== 0 && (
        <>
          <CurrentWeather data={data} />
          <Forecast data={data.forecast} />
        </>
      )}
    </div>
  );
}

export default App;
