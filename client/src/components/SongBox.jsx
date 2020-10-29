import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';

// Import AlbumCovers
import AbbyRoad from './albumImages/AbbyRoad.jpg';
import AHardDayNight from './albumImages/AHardDayNight.jpg';
import Beatles1 from './albumImages/Beatles1.jpg';
import Beatles2 from './albumImages/Beatles2.jpg';
import Beatles3 from './albumImages/Beatles3.jpg';
import BeatlesBlue from './albumImages/BeatlesBlue.jpg';
import Early from './albumImages/Early.jpg';
import HardDayUK from './albumImages/HardDayUK.jpg';
import Help from './albumImages/Help.jpg';
import LetItBe from './albumImages/LetItBe.jpg';
import RubberSoul from './albumImages/RubberSoul.jpg';
import TheBeatles from './albumImages/TheBeatles.jpg';

// Set AlbumCovers in an array
const covers = [AbbyRoad, AHardDayNight, Beatles1, Beatles2, Beatles3, BeatlesBlue, Early, HardDayUK, Help, LetItBe, RubberSoul, TheBeatles];

// Function to get a random Album cover for the SongBox
function randomCover() {
    let num = Math.floor( Math.random() * covers.length );
    let img = covers[ num ];
    return img;
};

// Song box to link the song to the Songsterr Tab Sheet
const SongBox = (props) => {
  return (   
    <Card className='Box' style={{ width: '18rem' }}>
      <Card.Img src={randomCover()} alt="Album Cover" />
        <Card.ImgOverlay className='album'>
            <Card.Title style={{ textAlign:'center' }} >{props.title} </Card.Title>
            <div className='PlayLink'>
              <Card.Link className='Play' href={`http://www.songsterr.com/a/wa/song?id=${props.id}`}>Learn To Play This Song!</Card.Link>
            </div>
      </Card.ImgOverlay>
    </Card>
  );
};
export default SongBox;