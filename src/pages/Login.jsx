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
import { checkInputField } from "../utils/checkFormInput";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const { myUser, setMyUser } = useContext(dataContext);

  const login = (e) => {
    e.preventDefault();
    if (errorEmail || errorPassword) {
      setLoader(true);
      axios
        .post("http://localhost:5500/users/login", {
          email,
          password,
        })
        .then((res) => {
          console.log("connexion avec succès");
          setMyUser(res.data.user);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userData", JSON.stringify(res.data.user));
          navigate("/chat");
        })
        .catch((err) => {
          console.log("erreur de connexion");
        });
    }
  };

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
          <p className="titre_connect">Connexion</p>
          <form action="">
            <input
              type="text"
              placeholder="Email"
              className="inputNom"
              onChange={(e) => {
                setEmail(e.target.value);
                checkInputField(e, "email", setErrorEmail, setErrorPassword);
              }}
            />

            {errorEmail && <label htmlFor="">L'email est invalide</label>}

            <input
              type="password"
              placeholder="Mot de passe"
              className="inputPassword"
              onChange={(e) => {
                setPassword(e.target.value);
                checkInputField(e, "password", setErrorEmail, setErrorPassword);
              }}
            />
            {errorPassword && (
              <label htmlFor="">Verifiez votre mot de passe</label>
            )}

            {loader ? <div className="loader"></div> : ""}
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
