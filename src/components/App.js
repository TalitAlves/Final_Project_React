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
import Favorites from "./Favorites";
import { UserContextAuth } from "../contexts/UserContext";
import AuthRoute from "./AuthRoute/AuthRoute";

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
      navigate("/");
    } else {
      setUser(false);
    }
  };

  return (
    <div className="App">
      <Navbar  />
      <UserContextAuth.Provider value={{user, setUser}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Books />} />
        <Route path="/list" element={<FilterBook />} />
        <Route path="/list/:id" element={<BookDetails />} />
        <Route path="/:id" element={<BookDetails />} />
        <Route path="/register" element={<Register loginUser={isUserCreated} />} />
        <Route path="/login" element={<Login loginUser={isUserCreated} />} />
        <Route
          path="/favorites"
          element={
            <AuthRoute user={user} component={<Favorites />} />
          }
        />
       
      </Routes>
      </UserContextAuth.Provider>
    </div>
  );
}

export default App;
