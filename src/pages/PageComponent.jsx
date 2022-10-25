import React from "react";
import Connecter from "../components/Connecter";
import Navigation from "../components/Navigation";
import Chats from "./Chats";
export default function PageComponent() {
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
