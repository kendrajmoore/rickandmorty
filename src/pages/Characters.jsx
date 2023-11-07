import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import CharCard from '../components/CharCard';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setFavorites, favorites } = useOutletContext();
  const navigate = useNavigate();
  const {id} = useParams()

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
      <CharCard 
        id={character.id}
        key={character.id}
        name={character.name} 
        species={character.species}
        status={character.status}
        image={character.image}
        favorites={favorites}
        setFavorites={setFavorites}
        />
  ))
  return (
    <>
      <h1 className='characters'>Characters</h1>
      {isLoading ? (
        <Spinner className="spinner" animation="border" variant="secondary" />
      ) : (
        <div className='cards'>
          {characterCards}
          </div>
      )}
    </>
  );
}

export default Characters;
