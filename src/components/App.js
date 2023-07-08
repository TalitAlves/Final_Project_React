import "../styles/App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./Books";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import FilterBook from "./FilterBook";

function App() {
  const [searchBook, setSearchbook] = useState("Romance");
  const [apiResponse, setApiResponse] = useState([]);
  const [language, setLanguage] = useState("es");
  const [maxResults, setMaxResults] = useState(10);
  const API_KEY = `AIzaSyBGxIuI-3_Ft83HA5HWqEiwEnyj25fEnpA`;

  useEffect(() => {
    axios(
      `https://www.googleapis.com/books/v1/volumes?q=${searchBook}&langRestrict=${language}
      &maxResults=${maxResults}&orderBy=newest&key=${API_KEY}`
    )
      .then((response) => {
        console.log(response);

        setApiResponse(response.data.items);
      })
      .catch((error) => {});
  }, [searchBook, language, maxResults, API_KEY]);

  const addBooks = () => {
    if (maxResults <= 100) {
      setMaxResults(maxResults + 5);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setSearchbook={setSearchbook}
              apiResponse={apiResponse}
              addBooks={addBooks}
            />
          }
        />
        <Route
          path="/amor"
          element={<Books apiResponse={apiResponse} addBooks={addBooks} />}
        />
        <Route
          path="/list"
          element={
            <FilterBook
              apiResponse={apiResponse}
              addBooks={addBooks}
              language={language}
              setLanguage={setLanguage}
              setSearchbook={setSearchbook}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
