import { useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useOutletContext } from 'react-router-dom';
import CharCard from '../components/CharCard';
import LocCard from '../components/LocCard';
import EpisodeCard from '../components/EpisodeCard';

function Search() {
    const [searchInput, setSearchInput] = useState('');
    const [data, setData] = useState([]);
    const [locationData, setLocationData] = useState([]);
    const [episodeData, setEpisodeData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { setFavorites, favorites } = useOutletContext();


    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
        console.log(e.target.value)
    }
    async function fetchData(){
        setIsLoading(true);
        let allCharacters = [];
        let currentPage = 1;
        let totalPages = null;
        try {
          let response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchInput}`)
          console.log(response) 
          allCharacters = response.data.results;
          totalPages = response.data.info.pages;
          while(currentPage < totalPages){
            currentPage ++;
            response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
            allCharacters = [...allCharacters, ...response.data.results];
          }
          setData(allCharacters);
          console.log(response) 
        } catch(error) {
            console.error('Error fetching all characters:', error);
        }
        setLocationData([])
        setEpisodeData([])
        setIsLoading(false); 
    }

    async function fetchLocation(){
        setIsLoading(true);
        const response = await axios.get(`https://rickandmortyapi.com/api/location/?name=${searchInput}`)
        setLocationData((await response).data.results) 
        setData([])
        setEpisodeData([])
        console.log(response)
        setIsLoading(false);  
    }

    async function fetchEpisode(){
        setIsLoading(true);
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/?name=${searchInput}`)
        setEpisodeData((await response).data.results) 
        setData([])
        setLocationData([])
        console.log(response)  
        setIsLoading(false);
    }

    const characterCard = data.map((data, idx) => (
      <CharCard 
        id={data.id}
        key={data.id}
        name={data.name} 
        species={data.species}
        status={data.status}
        image={data.image}
        favorites={favorites}
        setFavorites={setFavorites}
        />
      ))


      const locationCard = locationData.map((locationData, idx) => (
        <LocCard 
          key={locationData.id}
          id={locationData.id}
          name={locationData.name} 
          dimension={locationData.dimension} 
          type={locationData.type} 
        />
      ))

      const episodeCard = episodeData.map((episodeData, idx) => (
        <EpisodeCard 
          key={episodeData.id}
          id={episodeData.id}
          name={episodeData.name}
          episode={episodeData.episode}
          air_date={episodeData.air_date}
        />
      ))

  return (
    <>
        <input className="input" type="text" onChange={handleChange} value={searchInput} placeholder="Search" /> <br/>
        <button onClick={fetchData}className='input-btn'>Character</button>
        <button onClick={fetchLocation}className='input-btn'>Location</button>
        <button onClick={fetchEpisode}className='input-btn'>Episode</button>
      
        <div className='cards'>
        { isLoading &&  <Spinner className="spinner" animation="border" variant="secondary" /> }
          { characterCard  }
          { locationCard }
          { episodeCard }
         
       </div>
    </>
  )
}

export default Search;