import React from "react";
import "../styles/Books.css";
import bookcover from "../img/bookcover.jfif";
import { Link } from "react-router-dom";
import favorite from "../img/favorite.png";
import unfavorite from "../img/unfavorite.png";
import { useFavoriteContext } from "../contexts/favorites";
import Button from "./Button";

function Book({ book }) {
  const {favorites, addFavorites} = useFavoriteContext()
 
  const isFavorite = favorites.some((fav)=>fav.id === book.id)
  const icon = isFavorite ? unfavorite : favorite 
  
  return (
    <>
      <div className="grid-item-image">
      {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
          <img
            
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
        ) : (
          <img  src={bookcover} alt="bookcover" style={{width:"100%"}}/>
        )}

      </div>
      <div>
        <p> {book.volumeInfo.title}</p>
      </div>
           
        <Link to={`${book.id}`} className="button"><Button message="Details" /></Link>
      
      
      <div className="favoriteIcon">
        <img src={icon} alt="icon" onClick={()=> addFavorites(book)}/>
      </div>
    </>
  );
}

export default Book;
