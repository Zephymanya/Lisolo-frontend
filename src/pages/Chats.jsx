import React from "react";
import "../Css/chat.css";
import userH from "../images/userH.jpeg";
import { BsCamera } from "react-icons/bs";
import { BsCursor } from "react-icons/bs";
import dataContext from "../components/dataContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { socket } from "./socketConnection";

export default function Chats() {
  const [loading, setLoading] = useState(false);
  const { avoirImage, setAvoirImage } = useContext(dataContext);

  const sendImage = async (e) => {
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
  };

  console.log(avoirImage, "rulImage");

  const {
    findChat,
    userInfo,
    userData,
    afficherMessage,
    receiveMessage,
    setAfficherMessage,
    getChat,
    setSendMessage,
    sendMessage,
  } = useContext(dataContext);

  console.log(afficherMessage);

  const [message, setMessage] = useState("");
  const { setReceivm } = useContext(dataContext);
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceivm(data);
      console.log(data);
    });
  }, []);

  const Envoi_Message = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const envoiMessage = (e) => {
    e.preventDefault();
    const receiverId = getChat.membres.find((id) => id !== userData.userId);

    axios
      .post("http://localhost:5500/message", {
        chatId: findChat,
        senderId: userData.userId,
        text: message,
        picture: avoirImage,
      })
      .then((res) => {
        setAfficherMessage((prev) => [...prev, res.data]);
        socket.emit("send_message", {
          chatId: findChat,
          senderId: userData.userId,
          text: message,
          picture: avoirImage,
          receiverId,
        });
      });
  };

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatId === findChat) {
      setAfficherMessage((prev) => [...prev, receiveMessage]);
    }
  }, [receiveMessage]);

  return (
    <div className="shadow containtChat">
      <div className="UserConnecter">
        <div className="image_content">
          <img src={userInfo.picture} alt="" />
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
                    ? "messagerecu"
                    : "messageEnvoyer"
                }
              >
                <p className="para_message">{message.text} </p>
                {message.picture ? (
                  <img className="messageImage" src={message.picture} alt="" />
                ) : null}
              </div>

              <p
                className={
                  message.senderId === userData.userId
                    ? "dateInfoLeft"
                    : "dateInfo"
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
            <div className="file">
              <input type="file" id="file" onChange={sendImage} />
              <h1 className="uplodImage">
                <BsCamera />
              </h1>
            </div>
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
