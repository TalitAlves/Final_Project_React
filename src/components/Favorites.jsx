import React, { useContext } from "react";
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
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
    );
  
}

export default Favorites;
