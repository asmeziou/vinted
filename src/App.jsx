import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import FilterRange from "./components/FilterRange";

function App() {
  // le path de chaque Route du router correspond à 'lurl de la barre d'adresse du navigateur
  const [token, setToken] = useState(Cookies.get("userToken") || "");
  const [values, setValues] = useState([0, 1000]);
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header
        token={token}
        setToken={setToken}
        values={values}
        setValues={setValues}
        search={search}
        setSearch={setSearch}
      />
      <Hero />
      <Routes>
        <Route
          path="/"
          element={
            <Home values={values} setValues={setValues} search={search} />
          }
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route
          path="/signup"
          element={<Signup token={token} setToken={setToken} />}
        />
        <Route
          path="/login"
          element={<Login token={token} setToken={setToken} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
