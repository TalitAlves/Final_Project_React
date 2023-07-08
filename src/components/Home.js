import React, { useState } from "react";
import "../styles/Home.css";
import bgbook from "../img/bg-books.webp";
import Books from "./Books";

function Home({ setSearchbook, apiResponse, addBooks }) {
  const [searchInput, setSearchInput] = useState("");
  const [showBooks, setShowBooks] = useState(false);
  const secaoAlvo = document.getElementById("booksSession");

  const handleInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchbook(searchInput);
    setShowBooks(true);
  };

  const goToBooksSession = () => {
    if (secaoAlvo) {
      const secaoAlvoTop = secaoAlvo.offsetTop;

      window.scrollTo({
        top: secaoAlvoTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${bgbook})` }} className="bg-books">
        <div className="home-container">
          <h1>"A book is a dream that you hold in your hands"</h1>
          <p>Neil Gaiman </p>

          <form onClick={handleSubmit}>
            <input
              type="text"
              placeholder="Search for a book"
              onChange={handleInput}
            />
            <button onClick={goToBooksSession}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div id="booksSession">
        {showBooks ? (
          <Books apiResponse={apiResponse} addBooks={addBooks} />
        ) : null}
      </div>
    </div>
  );
}

export default Home;