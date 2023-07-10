import "../styles/App.css";

import Books from "./Books";
import Navbar from "./Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import FilterBook from "./FilterBook";
import BookDetails from "./BookDetails";
import Register from "./Register";
import Login from "./Login";
import { useState } from "react";
import db from "../db.json";


function App() {
    
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const isUserCreated = (formData) => {
    const user = db.users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (user) {
      setUser(user);
      return !!user;
    } else {
      setUser(false);
      console.log("false");
    }
  };

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
        <Route path="/login" element={<Login loginUser={isUserCreated} />} />
      </Routes>
    </div>
  );
}

export default App;
