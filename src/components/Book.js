import React from "react";
import "../styles/Books.css";
import bookcover from "../img/bookcover.jfif";
import { Link } from "react-router-dom";
import favorite from '../img/favorite.png'
import unfavorite from '../img/unfavorite.png'

function Book({ book }) {
  return (
    <>
     
        {book.volumeInfo.imageLinks?.thumbnail ? (
          <img
            className="grid-iten-imagem"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
        ) : (
          <img className="grid-iten-imagem" src={bookcover} alt="bookcover" />
        )}
        <p> {book.volumeInfo.title}</p>
        <button  className="seeMore-btn">
          <Link to={`${book.id}`}>Details</Link>
        </button>
        <div className="favoriteIcon"> 
        <img src={unfavorite} alt="unfavorite" />
        </div>
    </>
  );
}

export default Book;
