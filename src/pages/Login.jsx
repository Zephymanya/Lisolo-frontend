import React from "react";
import "../Css/login.css";
import girl from "../images/girl.png";
import ico from "../images/ico.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import dataContext from "../components/dataContext";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userData, setUserData } = useContext(dataContext);

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5500/users/login", {
        email,
        password,
      })
      .then((res) => {
        alert("Bienvenue");
        console.log("connexion avec succès");
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        //  setUserData(res.data.user)
        localStorage.setItem("userData", JSON.stringify(res.data.user));
        navigate("/chat");
        // console.log(res.data.user);
      })
      .catch((err) => {
        console.log("erreur de connexion");
      });
  };
  // console.log(userData);
  // console.log(email);
  // console.log(password);
  return (
    <div className="formContenair">
      <div className="formContenair2">
        <div
          className="ContenaireFormul"
          style={{
            marginTop: "-10%",
          }}
        >
          <h2>KABA LISOLO</h2> <img src={ico} alt="" className="icoMessage" />
          <p>Connexion</p>
          <form action="">
            <input
              type="text"
              placeholder="Email"
              className="inputNom"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="Mot de passe"
              className="inputPassword"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </form>
          <NavLink to={"/inscription"}>
            <p style={{ marginTop: "5%" }}>J'ai pas de compte</p>
          </NavLink>
          <NavLink to={"/chat"}>
            <button
              style={{
                width: "15em",
                marginTop: "3%",
                height: "2em",
              }}
              type="submit"
              onClick={login}
            >
              Se connecter
            </button>
          </NavLink>
        </div>

        <div>
          <img src={girl} alt="" className="imageLogin" />
        </div>
      </div>
    </div>
  );
}
