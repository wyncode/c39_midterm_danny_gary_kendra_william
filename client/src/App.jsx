import React from 'react';
//import { AppContextProvider } from './context/AppContext';
//import ContextDemo from './components/ContextDemo';

import './App.css';
import SearchForm from './components/SearchForm';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  return (
    <AppContextProvider>
      <div id="demo">
        <h3>Hello</h3>
        <SearchForm />
        <h3>{serverMessage}</h3>
      </div>
    </AppContextProvider>
  );
};

export default App;
