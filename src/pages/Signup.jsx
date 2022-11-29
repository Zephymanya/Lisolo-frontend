import React from "react";
import "../Css/login.css";
import girl from "../images/girl.png";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import dataContext from "../components/dataContext";

export default function Login() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState("");
  const { avoirImage, setAvoirImage } = useContext(dataContext);

  const navigate = useNavigate();
  const ajouterUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5500/users", {
      nom,
      email,
      password,
      picture,
    })
      .then(() => {
        alert("Inscription avec succès");
        console.log("ulisateur ajouter dans la bd");
        navigate("/chat");
      })
      .catch((err) => {
        alert("ce compte existe déjà dans la base de données");
        console.log("erreur d'inscription");
      });
  };
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Zephy-Image");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dc5vehv0u/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setAvoirImage(file.secure_url);
    setLoading(false);
    setPicture(avoirImage);
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
          <h2>KABA LISOLO</h2>
          <h2>Je m'inscris</h2>

          <form action="">
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              className="inputNom"
              onChange={(e) => {
                setNom(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Email"
              className="inputPassword"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="inputPassword"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="file"
              className="inputPassword"
              onChange={uploadImage}
            />

            <NavLink to={"/chat"}>
              <button
                style={{
                  width: "15em",
                  marginTop: "3%",
                  height: "2em",
                }}
                type="submit"
                onClick={ajouterUser}
              >
                S'inscrire
              </button>
            </NavLink>
          </form>
        </div>

        <div>
          <img src={girl} alt="" className="imageLogin" />
        </div>
      </div>
    </div>
  );
}
