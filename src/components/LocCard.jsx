import React from 'react'
import Card from 'react-bootstrap/Card';

function LocCard({name, id, dimension, type}) {
  return (
    <Card id="charcard" key={id} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {dimension}
          </Card.Text>
          <Card.Text>
            {type}
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default LocCard