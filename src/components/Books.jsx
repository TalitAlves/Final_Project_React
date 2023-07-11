import React, { useContext } from "react";
import "../styles/Books.css";
import Book from "./Book";
import { ApiContext } from "../contexts/api";
import Button from "./Button";



function Books() {
  const { apiResponse } = useContext(ApiContext);
  const { addBooks } = useContext(ApiContext);
 


  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
              <div  className="grid-iten" key={book.id}>
                <Book book={book} />
                </div>
            );
          })}
        </div>
        <div className="btn-container">
           <Button onClick={addBooks} message={"See more"} style={{width:"70%", margin:"0 auto"}}/>
          <button className="go-to-top-btn" onClick={goToTop}>
            ʌ
          </button>
          
        </div>
      </div>
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

export default Books;
