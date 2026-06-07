import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Signup = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  // const [token, setToken] = useState(Cookies.get("userToken") || "");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: formdata.username,
          email: formdata.email,
          password: formdata.password,
        },
      );
      Cookies.set("userToken", response.data.token);
      setToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleChange = (event) => {
    const field = event.target.name;
    const fieldValue = event.target.value;

    const newFormdata = { ...formdata };
    newFormdata[field] = fieldValue;
    setFormdata(newFormdata);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Nom:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formdata.username}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formdata.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formdata.password}
        onChange={handleChange}
      />

      <button>S'inscrire</button>
    </form>
  );
};
export default Signup;
