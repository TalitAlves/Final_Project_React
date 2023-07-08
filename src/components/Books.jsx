import React from "react";
import '../styles/Books.css'
import Book from "./Book";

function Books({ apiResponse, addBooks }) {
  if (apiResponse) {
    const idSet = new Set(); 
    return (
      <div>
        <div className="books-grid">
          {apiResponse.map((book) => {
            if (idSet.has(book.id)) {
              return null; 
            }
            
            idSet.add(book.id);
            
            return (
              <div key={book.id} className="grid-iten">
                <Book book={book} />
              </div>
            );
          })}
        </div>
        <button onClick={addBooks}>See more</button>
      </div>
    );
  } else {
    return <>Loading</>;
  }
}


export default Books;
