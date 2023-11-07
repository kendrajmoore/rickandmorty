import {useEffect, useState}from 'react'
import axios from 'axios'
import { useParams, useOutletContext } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import EpisodeCard from '../components/EpisodeCard';
import Spinner from 'react-bootstrap/Spinner';

function CharactersDetails() {
  const [character, setCharacter] = useState([])
  const [episode, setEpisodes] = useState([])
  const [isLoading, setLoading] = useState(false)
  const {id} = useParams()
  const { setFavorites, favorites } = useOutletContext();
  console.log(id)

  const getCharacter = async()=> {
    let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    getEpisodes(response.data.episode)
    console.log("here: " ,response.data.episode)
    setCharacter(response.data)
  }

  const getEpisodes = async(episodeUrls) => {
    setLoading(true)
    const episodeIds = episodeUrls.map(url => {
      const parts = url.split('/');
      return parts[parts.length -1];
    });
    const url = `https://rickandmortyapi.com/api/episode/${episodeIds.join(',')}`;
    const response = await axios.get(url)
    const episodesData = Array.isArray(response.data) ? response.data : [response.data];
    setEpisodes(episodesData)
    console.log(response.data)
    setLoading(false);
  }



  useEffect(() =>{
    getCharacter()
  }, [])

  const episodeCard = episode.map((ep, idx) => (
    <EpisodeCard
      key={ep.id}
      id={ep.id}
      name={ep.name}
      episode={ep.episode}
      air_date={ep.air_date}
    />
  ))

  return (
    <>
        <h1 className='favorite-text'>Characters Details</h1>
        <div className='container'>
            <div className='first-char'>
                <img src={character.image}/>
      
            </div>
            <div className='second-char'>
                <h2>Name: {character.name}</h2>
                <p>Gender: {character.gender}</p>
                <p>Species: {character.species}</p>
                <p>Status: {character.status}</p>
                <Button variant="warning" onClick={()=>setFavorites([...favorites, {"id": character.id, "name": character.name, "species": character.species, "status": character.status, "image": character.image}])}>Favorite</Button>
            </div>
        </div>
        <div>
          <h3 className='favorite-text'>Episode Appearances</h3>
           <div className='cards'>
           { isLoading &&  <Spinner className="spinner" animation="border" variant="secondary" /> }
            { episodeCard }
           </div>

        </div>
    </>
  )
}

export default CharactersDetails