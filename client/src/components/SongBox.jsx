import React from 'react';
import Card from 'react-bootstrap/Card';

import './App.css';

const SongBox = ({ id, image, name }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src="holder.js/100px270" alt="Album Cover" />
      <Card.ImgOverlay>
        <Card.Title>Song Title</Card.Title>
        <Card.Subtitle className="album">Album Title</Card.Subtitle>
        <Card.Text>Some quick example text.</Card.Text>
        <Card.Link href="#">Guitar Link</Card.Link>
        <Card.Link href="#">Bass Link</Card.Link>
        <Card.Link href="#">Drum Link</Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default SongBox;
