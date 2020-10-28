import React from 'react';
import Card from 'react-bootstrap/Card';
import {useParams} from 'react-router-dom';
import '../App.css';

const SongBox = (props) => {
  let {id} = useParams();
  console.log(id);
  return (   
    <Card style={{ width: '18rem' }}>
      <Card.Img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg" alt="Album Cover" />
        <Card.ImgOverlay className='albumCover' style={{ opacity: .7 }}>
        <div >
          <Card.Title >{props.title} </Card.Title>
          <Card.Link className='Play' href={`http://www.songsterr.com/a/wa/song?id=${props.id}`}>Learn To Play This Song!</Card.Link>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};
export default SongBox;