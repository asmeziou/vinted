import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <header>
      <div className="container wrapper">
        <Link to="/">
          <img src={Logo} alt="vinted" />{" "}
        </Link>
        <div>
          <Link to="/signup">S'inscrire</Link>
          <Link to="/login">Se connecter</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
