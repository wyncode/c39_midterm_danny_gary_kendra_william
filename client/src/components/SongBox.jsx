import React from 'react';
import Card from 'react-bootstrap/Card';
import {useParams} from 'react-router-dom';


import '../App.css';

const SongBox = (props) => {
  let {id} = useParams();
  console.log(id);
  return (   
    <Card style={{ width: '18rem' }}>
      <Card.Img src="holder.js/100px270" alt="Album Cover" />
  <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="album">Album Title</Card.Subtitle>
        <div>
          <Card.Link href={`http://www.songsterr.com/a/wa/song?id=${props.id}`}>Learn To Play This Song!</Card.Link>
        </div>
    </Card>
  );
};

export default SongBox;
