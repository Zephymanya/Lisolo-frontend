import React from "react";
import user from "../images/user.png";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import "../Css/connect.css";

//
export default function Connecter() {
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
                src={user}
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

            <h1 style={{ color: "white" }}>
                <BiLogOut />
            </h1>
        </div>
    );
}
