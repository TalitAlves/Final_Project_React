import "../styles/App.css";

import Books from "./Books";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import FilterBook from "./FilterBook";
import BookDetails from "./BookDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Books />} />
        <Route path="/list" element={<FilterBook />} />
        <Route path="/list/:id" element={<BookDetails />} />

      </Routes>
    </div>
  );
}

export default App;
