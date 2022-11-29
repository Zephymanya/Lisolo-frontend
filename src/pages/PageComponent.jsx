import React from "react";
import Connecter from "../components/Connecter";
import Navigation from "../components/Navigation";
import Chats from "./Chats";
import { useEffect, useContext, useState } from "react";
import dataContext from "../components/dataContext";
import { socket } from "./socketConnection";

export default function PageComponent() {
  const { userData } = useContext(dataContext);
  console.log(userData.userId, "ba masta");
  useEffect(() => {
    socket.emit("newUser", userData.userId);
    socket.on("get-users", (data) => {
      // setUserOnline(data);
      // console.log(data);
    });
  }, [userData]);

  return (
    <div
      style={{
        display: "flex",
        gap: "3%",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Connecter />
      <Navigation />
      <Chats />
    </div>
  );
}
