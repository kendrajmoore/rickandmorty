import React from 'react'
import Card from 'react-bootstrap/Card';

function EpisodeCard ({ id, name, episode, air_date }) {
  return (
    <>
   <Card id="charcard" key={id} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {episode}
          </Card.Text>
          <Card.Text>
            {air_date}
          </Card.Text>
        </Card.Body>
      </Card>
    </>

  )
}

export default EpisodeCard