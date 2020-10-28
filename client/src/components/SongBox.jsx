import React from 'react';
import Card from 'react-bootstrap/Card';
import {useParams} from 'react-router-dom';
import '../App.css';

import AbbyRoad from './albumImages/AbbyRoad.jpg';
import Beatles1 from './albumImages/Beatles1.jpg';
import Beatles2 from './albumImages/Beatles2.jpg';
import Beatles3 from './albumImages/Beatles3.jpg';
import BeatlesBlue from './albumImages/BeatlesBlue.jpg';
import HardDayUK from './albumImages/HardDayUK.jpg';
import Help from './albumImages/Help.jpg';
import LetItBe from './albumImages/LetItBe.jpg';

const covers = [AbbyRoad, Beatles1, Beatles2, Beatles3, BeatlesBlue, HardDayUK, Help, LetItBe];

function randomCover() {
    let num = Math.floor( Math.random() * covers.length );
    let img = covers[ num ];
    return img;
};
console.log(randomCover);

const SongBox = (props) => {
  let {id} = useParams();
  console.log(id);
  return (   
<<<<<<< HEAD
    <Card style={{ width: '18rem' }}>
      <Card.Img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg" alt="Album Cover" />
        <Card.ImgOverlay className='albumCover' style={{ opacity: .7 }}>
        <div >
          <Card.Title >{props.title} </Card.Title>
          <Card.Link className='Play' href={`http://www.songsterr.com/a/wa/song?id=${props.id}`}>Learn To Play This Song!</Card.Link>
        </div>
=======
    <Card className='Box' style={{ width: '18rem' }}>
      <Card.Img src={randomCover()} alt="Album Cover" />
        <Card.ImgOverlay className='album'>
            <Card.Title style={{ textAlign:'center' }} >{props.title} </Card.Title>
            <div className='whatever'>
              <Card.Link className='Play' href={`http://www.songsterr.com/a/wa/song?id=${props.id}`}>Learn To Play This Song!</Card.Link>
            </div>
>>>>>>> e45067c28e52cd47064786ff6465802e3197c096
      </Card.ImgOverlay>
    </Card>
  );
};
export default SongBox;