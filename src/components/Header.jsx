import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import FilterRange from "./FilterRange";

const Header = ({ token, setToken, values, setValues, search, setSearch }) => {
  const location = useLocation();
  return (
    <header>
      <div>
        <input
          type="text"
          id="search"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
      </div>
      <div className="container wrapper">
        <Link to="/">
          <img src={Logo} alt="vinted" />
        </Link>

        {location.pathname === "/" && (
          <div className="filter-range">
            <FilterRange values={values} setValues={setValues} />
          </div>
        )}

        <div>
          {token ? (
            <button
              onClick={() => {
                // retirer le token du state
                setToken(null);
                // retirer le token des cookies
                Cookies.remove("userToken");
              }}
            >
              Déconnexion
            </button>
          ) : (
            <>
              <Link to="/signup">S'inscrire</Link>
              <Link to="/login">Se connecter</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
