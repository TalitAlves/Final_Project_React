import React from "react";
import '../styles/Books.css'
import Book from "./Book";

function Books({ apiResponse, addBooks }) {
  if (apiResponse) {
    return (
      <div >
        <div className="books-grid">
          {apiResponse.map((book) => (
            <div key={book.id}  >
             <Book book={book}/>
            </div>
          ))}
        </div>
        <button onClick={addBooks}>See more</button>
      </div>
    );
  } else {
    <>Loading</>;
  }
}

export default Books;
