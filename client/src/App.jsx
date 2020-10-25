import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
//import SongBox from './components/SongBox'
//import AboutBeatlesPages from './components/AboutBeatlesPage';

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
