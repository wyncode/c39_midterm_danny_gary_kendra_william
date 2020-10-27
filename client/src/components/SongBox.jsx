import React from 'react';
import Card from 'react-bootstrap/Card';

import '../App.css';

const SongBox = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src="holder.js/100px270" alt="Album Cover" />
  <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="album">Album Title</Card.Subtitle>
        <div>
          <Card.Link href="#">Guitar</Card.Link>
          <Card.Link href="#">Bass</Card.Link>
          <Card.Link href="#">Drum</Card.Link>
        </div>
    </Card>
  );
};

export default SongBox;
