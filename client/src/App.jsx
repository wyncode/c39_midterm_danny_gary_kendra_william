import React, { useState, useEffect } from 'react';
import './App.css';
//import NavMenu from './components/NavMenu';
//import AboutBeatlesPage from './components/AboutBeatlesPage';
//import AboutTeamPage from './components/AboutTeamPage';
import SearchForm from './components/SearchForm';
//import SongBox from './components/SongBox'
//import MainPage from './components/MainPage';


const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  return (
    <div id="#">
      <h3>Nav Bar Goes Here</h3>                   
      <SearchForm />
      <h3>{serverMessage}</h3>
    </div>
  );
};
export default App;
