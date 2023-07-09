import "../styles/App.css";

import Books from "./Books";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import FilterBook from "./FilterBook";
import BookDetails from "./BookDetails";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Books />} />
        <Route path="/list" element={<FilterBook />} />
        <Route path="/list/:id" element={<BookDetails />} />
        <Route path="/:id" element={<BookDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </div>
  );
}

export default App;
