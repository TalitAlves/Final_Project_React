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
import Logout from "./Logout";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const onLogout = () => {
    setIsLoggedIn(false);
    setUser(false);
    toast.success("User logged out successfully");
    
  };

  const loginUser = (formData) => {
    const user = db.users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (user) {
      setUser(user);
      toast.success("Logged in");
      navigate("/");
      setIsLoggedIn(true);
    
    } else {
      setUser(false);
      toast.warning("User not fount");
     
    }
  };

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <ToastContainer></ToastContainer>

      <UserContextAuth.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Books />} />
          <Route path="/list" element={<FilterBook />} />
          <Route path="/list/:id" element={<BookDetails />} />
          <Route path="/:id" element={<BookDetails />} />
          <Route
            path="/register"
            element={<Register loginUser={loginUser} />}
          />
          <Route path="/logout" element={<Logout onLogout={onLogout} />} />
          <Route path="/login" element={<Login loginUser={loginUser} />} />

          <Route
            path="/favorites"
            element={<AuthRoute user={user} component={<Favorites />} />}
          />
        </Routes>
      </UserContextAuth.Provider>
    </div>
  );
}

export default App;
