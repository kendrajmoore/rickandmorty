import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';


function Characters() {
  const [characters, setCharacters] = useState([]);

  async function fetchData(){
    const response = axios.get("https://rickandmortyapi.com/api/character")
    setCharacters((await response).data.results)    
  }
  useEffect(() => {
    fetchData()
  }, [])
  const characterCard = characters.map((character, idx) => (
    <Card id="charcard" key={idx} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={character.image} />
    <Card.Body>
      <Card.Title>{character.name}</Card.Title>
      <Card.Text>
        {character.species}
      </Card.Text>
      <Card.Text>
        {character.status}
      </Card.Text>
    </Card.Body>
  </Card>
  ))
  return (
    <>
      <h1 className='characters'>Characters</h1>
       <div className='cards'>
          {characterCard}
       </div>
    </>

  )
}

export default Characters