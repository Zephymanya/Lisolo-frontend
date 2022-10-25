import React from "react";
import user from "../images/user.png";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import "../Css/connect.css";
import { useContext } from "react";
import dataContext from "./dataContext";
import { useNavigate } from "react-router-dom";
//
export default function Connecter() {
  const { userData } = useContext(dataContext);

  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "rgba(25, 102, 255, 1)",
        height: "97vh",
        width: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "20px",
      }}
    >
      <img
        // src={userData.picture}
        alt=""
        style={{
          width: "20% !important",
          height: "10% ",
          borderRadius: "40px!important",
          marginTop: "18% ",
        }}
      />

      <div
        className="contentMessagerie"
        style={{ borderRight: "4px solid yellow" }}
      >
        <h1
          style={{
            color: "white",
          }}
        >
          <AiOutlineComment />
        </h1>
      </div>
      <div
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        {}
        <h1 style={{ color: "white" }}>
          <BiLogOut />
        </h1>
      </div>
    </div>
  );
}
