import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function CharCard({ id, name, status, species, image, favorites, setFavorites }) {
  const addFavorites = () => {
    const isFavorite = favorites.some(favorite => favorite.id === id);
    if(isFavorite){
      alert("You already added this person")
    } else if(favorites.length < 5) {
      setFavorites([...favorites, {"name": name, "image": image, "status": status, "species": species, "id": id }])
    } else {
      alert('You can only have 5 favorites');
    }
  }
  const removeFromFavorites = () => {
    const newFavorites = favorites.filter(favorite => favorite.id !== id);
    setFavorites(newFavorites);
  }
  return (
    <Card key={id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Text>This character is {status}</Card.Text>
        <Card.Text>This character is a {species}</Card.Text>
        <Link to={`/character/${id}`}><Button variant="primary">{name} page</Button></Link><br/>
        <Button variant="warning" onClick={addFavorites}> Favorite </Button><br/>
        <Button variant="danger" onClick={removeFromFavorites}> Delete </Button>
      </Card.Body>
    </Card>
  );
}

export default CharCard;