import React from "react";
import "../styles/Books.css";
import bookcover from "../img/bookcover.jfif";
import { Link } from "react-router-dom";
import favorite from "../img/favorite.png";
import unfavorite from "../img/unfavorite.png";
import { useFavoriteContext } from "../contexts/favorites";

function Book({ book }) {
  const {favorites, addFavorites} = useFavoriteContext()
 
  const isFavorite = favorites.some((fav)=>fav.id === book.id)
  const icon = isFavorite ? unfavorite : favorite 
  
  return (
    <div className="grid-iten" key={book.id}>
      <div>
      {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
          <img
            className="grid-item-image"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
        ) : (
          <img className="grid-item-image" src={bookcover} alt="bookcover" />
        )}

      </div>
      <div>
        <p> {book.volumeInfo.title}</p>
      </div>
      <button className="seeMore-btn">
        <Link to={`${book.id}`}>Details</Link>
      </button>
      <div className="favoriteIcon">
        <img src={icon} alt="icon" onClick={()=> addFavorites(book)}/>
      </div>
    </div>
  );
}

export default Book;
