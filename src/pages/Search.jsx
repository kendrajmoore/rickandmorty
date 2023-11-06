import { useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';

function Search() {
    const [searchInput, setSearchInput] = useState('');
    const [data, setData] = useState([]);
    const [locationData, setLocationData] = useState([]);
    const [episodeData, setEpisodeData] = useState([]);
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
        console.log(e.target.value)
    }
    async function fetchData(){
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchInput}`)
        setData((await response).data.results) 
        console.log(response)   
    }

    async function fetchLocation(){
        const response = await axios.get(`https://rickandmortyapi.com/api/location/?name=${searchInput}`)
        setLocationData((await response).data.results) 
        console.log(response)   
    }

    async function fetchEpisode(){
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/?name=${searchInput}`)
        setEpisodeData((await response).data.results) 
        console.log(response)   
    }

    const characterCard = data.map((data, idx) => (
        <Card id="charcard" key={idx} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            {data.species}
          </Card.Text>
          <Card.Text>
            {data.status}
          </Card.Text>
        </Card.Body>
      </Card>
      ))

      const locationCard = locationData.map((locationData, idx) => (
        <Card id="charcard" key={idx} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{locationData.name}</Card.Title>
          <Card.Text>
            {locationData.dimension}
          </Card.Text>
          <Card.Text>
            {locationData.type}
          </Card.Text>
        </Card.Body>
      </Card>
      ))

      const episodeCard = episodeData.map((episodeData, idx) => (
        <Card id="charcard" key={idx} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{episodeData.name}</Card.Title>
          <Card.Text>
            {episodeData.episode}
          </Card.Text>
          <Card.Text>
            {episodeData.air_date}
          </Card.Text>
        </Card.Body>
      </Card>
      ))

  return (
    <>
        <input className="input" type="text" onChange={handleChange} value={searchInput} placeholder="Search" /> <br/>
        <button onClick={fetchData}className='input-btn'>Character</button>
        <button onClick={fetchLocation}className='input-btn'>Location</button>
        <button onClick={fetchEpisode}className='input-btn'>Episode</button>
      
        <div className='cards'>
          {data && characterCard}
          {locationData && locationCard}
          {episodeData && episodeCard}
       </div>
    </>
  )
}

export default Search;