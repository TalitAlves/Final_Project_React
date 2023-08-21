import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bookcover from "../img/bookcover.jfif";
import "../styles/BookDetails.css";
import { Link } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const API_KEY = `AIzaSyBGxIuI-3_Ft83HA5HWqEiwEnyj25fEnpA`;

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`)
      .then((response) => {
        setBook(response.data.volumeInfo);
      })
      .catch((error) => {});
  }, [id, API_KEY]);

  const formattedText = book.description
    ? book.description
        .replace(/<\/?p>/g, "\n")
        .replaceAll("<br>", "\n")
        .replace(/\./g, ".\n")
        .trim()
    : "";
  const descriptionParagraphs = formattedText ? formattedText.split("\n") : [];

  if (book) {
    return (
      <>
        <div className="details-container">
          <div className="img-info">
            <div>
              {book.imageLinks?.thumbnail ? (
                <img src={book.imageLinks.thumbnail} alt={book.title} />
              ) : (
                <img src={bookcover} alt="bookcover" />
              )}
            </div>
            <div className="info">
              <p>
                Author:{" "}
                {book.authors &&
                  book.authors.map((author) => (
                    <span key={author}>{author}</span>
                  ))}
              </p>
              <p>Number of pages: {book.pageCount}</p>
              <p>Publisher: {book.publisher}</p>
              <p>Publish date: {book.publishedDate}</p>
              <p>
                Category:
                {book.categories && book.categories.length > 0
                  ? book.categories[0]
                  : "N/A"}
              </p>
            </div>
            <div className="btn-back">
              <Link to="/list">
                <button className="btn-primary">
                  <span class="material-symbols-outlined">undo</span>
                </button>
              </Link>
            </div>
          </div>
          <h1>{book.title}</h1>
          <h3>{book.subtitle}</h3>
          <h4>Description:</h4>
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <div className="erroMessage-container">
        <div className="erroMessage">
          "No books found with the provided search pattern. Please refine your
          search."
        </div>
      </div>
    );
  }
}

export default BookDetails;
