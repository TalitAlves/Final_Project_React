
import { useFavoriteContext } from "../contexts/favorites";
import Book from "./Book";
import '../styles/Books.css'

function Favorites() {
  const { favorites } = useFavoriteContext();
    
    return (
      <div className="favorite-container">
        <h1>My Favorites Books</h1>
      <div className="books-grid">
    
        {favorites.map((book) => (
          <div  className="grid-iten" key={book.id}>
          <Book book={book} />
          </div>
        ))}
      </div>
    </div>
    );
  
}

export default Favorites;
