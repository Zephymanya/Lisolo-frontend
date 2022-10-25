import React, { useContext } from "react";
import "./navigation.css";
import { AiOutlineSearch } from "react-icons/ai";
import usergirl from "../images/usergirl.jpeg";
import { useState, useEffect } from "react";
import dataContext from "./dataContext";
import axios from "axios";

export default function Navigation() {
  const { userInfo, setUserInfo, setUserData } = useContext(dataContext);
  const [listUser, setListUser] = useState([]);
  // const [selectedUser, setSelectedUser] = useState();

  // setUserData(localStorage.getItem("userData"));

  const myuser = localStorage.getItem("userData");
  // console.log(userData +"nous et le data");

  const handleclick = (user) => {
    setUserData(user);
    axios
      .post("http://localhost:5500/chat", {
        _id: user._id,
        _id: userInfo._id,
      })
      .then((response) => {
        console.log(response);
      });
  };

  // fin get _id

  // console.log(localStorage.getItem("userData")+"Localstorage");

  useEffect(() => {
    axios.get("http://localhost:5500/users/liste_sers").then((res) => {
      setListUser(res.data.user);
    });
  }, [myuser]);

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
