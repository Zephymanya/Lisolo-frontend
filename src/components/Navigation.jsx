import React, { useContext, useRef } from "react";
import "./navigation.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import dataContext from "./dataContext";
import axios from "axios";

export default function Navigation() {
  // const socket = useRef();

  const {
    userData,
    findChat,
    userInfo,
    setUserInfo,
    setFindChat,
    setUserOnline,
    setGetChat,
    avoirImage,
  } = useContext(dataContext);

  const [listUser, setListUser] = useState([]);
  

  console.log();
  const handleclick = (user) => {
    setUserInfo(user);
    console.log(user);
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

  // useEffect Sockect
  // *****************

  useEffect(() => {
    axios.get("http://localhost:5500/users/liste_sers").then((res) => {
      setListUser(res.data.user);
    });
  }, [userData]);

  useEffect(() => {
    axios
      .get(`http://localhost:5500/chat/find/${userData.userId}/${userInfo._id}`)
      .then((res) => {
        setFindChat(res.data._id);
        setGetChat(res.data);
      });
  }, []);

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
              <img src={user.picture} alt="" className="image_user" />
              {/* user.picture */}
              <h4>{user.nom} </h4>
            </div>
          ))}
      </div>
    </div>
  );
}
