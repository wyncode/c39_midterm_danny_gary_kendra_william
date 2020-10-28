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
        `http://www.songsterr.com/a/ra/songs/byartists.json?artists=beatles` //need to confirm this api
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
    <div className="searchbar">
      <SearchForm search={search} onChange={handleChange} />
    </div>
      <Slideshow />
      <Row>
        {filteredSongs.map((song) => {
          console.log(song.id);
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







//TRYING TO ADD SECOND API
// const MainPage = () => {
//   const [search, setSearch] = useState('');
//   const [tabPage, setTabPage] = useState([]);

//   const fetchData = () => {
//     const songAPI = 'https://www.songsterr.com/a/ra/songs.json?pattern=Beatles';
//     const tabPage = 'http://www.songsterr.com/a/wa/bestMatchForQueryString?s={song title}&a={artist name}';
//   }

//   const getSearch = axios.get(search)
//   const getTabPage = axios.get(tabPage)
//   axios.all([getSearch, getTabPage]).then( 
//     axios.spread((...allData) => {
//       const allDataPlayer = allData [0]
//       const getTabInfo = allData [1]

//       console.log()

//     }
//   ))
// };

// export default MainPage;