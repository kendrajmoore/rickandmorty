import React from 'react'
import { useOutletContext } from 'react-router-dom'
import CharCard from '../components/CharCard';

function FavoriteCharacters() {
  const { setFavorites, favorites } = useOutletContext();
  return (
    <>
    <h2 className='favorite-text'>Favorites</h2>
    <div className="favorites">
        {favorites.map((char, idx) =>(
          <CharCard key={char.id} id={char.id} name={char.name} image={char.image} status={char.status} species={char.species} setFavorites={setFavorites} favorites={favorites}/>
        ))}
    </div>
    </>
  )
}

export default FavoriteCharacters