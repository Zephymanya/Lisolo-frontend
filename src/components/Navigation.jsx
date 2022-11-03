import React, { useContext } from "react";
import "./navigation.css";
import { AiOutlineSearch } from "react-icons/ai";
import usergirl from "../images/usergirl.jpeg";
import { useState, useEffect } from "react";
import dataContext from "./dataContext";
import axios from "axios";

export default function Navigation() {
  const {
    userData,
    findChat,
    userInfo,
    setUserInfo,
    setFindChat,
    setAfficherMessage,
  } = useContext(dataContext);
  const [listUser, setListUser] = useState([]);

  const myuser = localStorage.getItem("userData");

  console.log();
  const handleclick = (user) => {
    setUserInfo(user);
    axios
      .post("http://localhost:5500/chat/", {
        senderId: userData.userId,
        receiverId: user._id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:5500/users/liste_sers").then((res) => {
      setListUser(res.data.user);
    });
  }, [myuser]);

  useEffect(() => {
    axios
      .get(`http://localhost:5500/chat/find/${userData.userId}/${userInfo._id}`)
      .then((res) => {
        setFindChat(res.data._id);
      });
  }, []);

  console.log(findChat);

  return (
    <div className="contenairNavig">
      <div className="shadow navigation">
        <AiOutlineSearch />
        <input type="text" placeholder="Recherche" className="serch_input" />
      </div>

      <div className="shadow contentStyleImgH">
        {listUser.length > 0 &&
          listUser.map((user, index) => (
            <div
              key={index}
              className="divImageTitre"
              onClick={() => handleclick(user)}
            >
              <img src={usergirl} alt="" />
              {/* user.picture */}
              <h4>{user.nom} </h4>
            </div>
          ))}
      </div>
    </div>
  );
}
