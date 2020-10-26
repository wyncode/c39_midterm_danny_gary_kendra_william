import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import SearchForm from './SearchForm';
// import childComponent from './childComponent';
import Row from 'react-bootstrap/Row';
import SongBox from './SongBox';
import NavMenu from './NavMenu';
import Slideshow from './Slideshow';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () => {
  const [search, setSearch] = useState('someBeatleSong');
  const [apiData, setApiData] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Take the value of the input box.
    console.log(event.target.elements.searchbar.value);
    // reminder: setSearch is the only way to change the search value.
    setSearch(event.target.elements.searchbar.value);
  };
  // This code only kicks in if "search" ever changes value.
  useEffect(() => {
    console.log('useEffect?');
    const fetchData = async () => {
      let response = await axios.get(
        `https://www.songsterr.com/a/ra/songs.json?pattern=Beatles` //need to confirm this api
      );
      // Save the fetch data into the apiData state var
      setApiData(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {/* <SearchForm handleSubmitProp={handleSubmit} /> */}
      <Slideshow />
      <Row>
        {apiData &&
          apiData.map((songs) => {
            console.log(songs);
            return (
              <div>
                <SongBox key={songs.id} id={songs.id} title={songs.title} />
              </div>
            );
          })}
      </Row>
    </>
  );
};
export default MainPage;
