import React from "react";
import "../Css/chat.css";
import userH from "../images/userH.jpeg";
import { BsCamera } from "react-icons/bs";
import { BsCursor } from "react-icons/bs";
import dataContext from "../components/dataContext";
import { useContext, useState } from "react";
import axios from "axios";

export default function Chats() {
  const { findChat, userInfo, userData, afficherMessage } =
    useContext(dataContext);
  const [message, setMessage] = useState("");

  const Envoi_Message = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  console.log(findChat);

  const envoiMessage = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5500/message", {
        chatId: findChat,
        senderId: userData.userId,
        text: message,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  // console.log(afficherMessage);
  console.log(userData.userId);
  return (
    <div className="shadow containtChat">
      <div className="UserConnecter">
        <div className="image_content">
          <img src={userH} alt="" />
        </div>

        <div className="content_titre">
          <h1 className="nom_user">{userInfo.nom} </h1>
          <p>{userInfo.statut} </p>
        </div>
      </div>
      <div className="content_body">
        {afficherMessage.length > 0 &&
          // console.log(afficherMessage);
          afficherMessage.map((message, index) => (
            <div key={index}>
              <div
                className={
                  message.senderId === userData.userId
                    ? "messageEnvoyer"
                    : "messagerecu"
                }
              >
                <p className="para_message">{message.text} </p>
              </div>
              <p
                className={
                  message.senderId === userData.userId
                    ? "dateInfo"
                    : "dateInfoLeft"
                }
              >
                {message.createdAt}{" "}
              </p>
            </div>
          ))}
      </div>

      <div className=" total_footer">
        <div className="footerCont">
          <div className="content_footer" onChange={Envoi_Message}>
            <input type="text" className="inputEcrirMessage" />
            <h1 className="uplodImage">
              <BsCamera />
            </h1>
          </div>

          <div className="sender" onClick={envoiMessage}>
            <h1 className="sender_image">
              <BsCursor />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
