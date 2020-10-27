import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import Row from 'react-bootstrap/Row';
import SongBox from './SongBox';
import Slideshow from './Slideshow';
import 'bootstrap/dist/css/bootstrap.min.css';
const MainPage = () => {
  const [search, setSearch] = useState('');
  const [apiData, setApiData] = useState([]);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  // This code only kicks in if "search" ever changes value.
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://www.songsterr.com/a/ra/songs.json?pattern=Beatles` //need to confirm this api
      );
      // Save the fetch data into the apiData state var
      setApiData(response.data);
    };
    fetchData();
  }, []);
  const filteredSongs = apiData.filter((song) =>
    song.title.toLowerCase().includes(search)
  );
  return (
    <>
      <SearchForm search={search} onChange={handleChange} />
      <Slideshow />
      <Row>
        {filteredSongs.map((song) => {
          return (
            <div>
              <SongBox key={song.id} id={song.id} title={song.title} />
            </div>
          );
        })}
      </Row>
    </>
  );
};
export default MainPage;
