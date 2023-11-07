import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  const fetchData = async () => {
    setIsLoading(true);
    let allCharacters = [];
    let currentPage = 1;
    let totalPages = null;

    try {
      let response = await axios.get(`https://rickandmortyapi.com/api/character`);
      allCharacters = response.data.results;
      totalPages = response.data.info.pages;

      while (currentPage < totalPages) {
        await sleep(1000);
        currentPage++;
        response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
        allCharacters = [...allCharacters, ...response.data.results];
      }

      setCharacters(allCharacters);
    } catch (error) {
      console.error('Error fetching all characters:', error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const characterCards = characters.map((character, idx) => (
    <Card id={`charcard-${idx}`} key={idx} style={{ width: '18rem' }}>
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
  ));

  return (
    <>
      <h1 className='characters'>Characters</h1>
      {isLoading ? (
        <Spinner className="spinner" animation="border" variant="secondary" />
      ) : (
        <div className='cards'>{characterCards}</div>
      )}
    </>
  );
}

export default Characters;
