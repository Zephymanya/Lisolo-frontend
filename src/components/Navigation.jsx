import React from "react";
import "./navigation.css";
import { BsTelegram } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import usergirl from "../images/usergirl.jpeg";
import userH from "../images/userH.jpeg";

export default function Navigation() {
    return (
        <div className="contenairNavig">
            <div className="shadow navigation">
                <AiOutlineSearch />
                <input type="text" placeholder="Recherche" className="serch_input"/>
            </div>

            <div className="shadow contentStyleImgH">
                <div className="divImageTitre">
                    <img src={usergirl} alt="" />
                    <h4>Makinda</h4>
                </div>
                <div className="divImageTitre">
                    <img src={usergirl} alt="" />
                    <h4>Makinda</h4>
                </div>
                <div className="divImageTitre">
                    <img src={usergirl} alt="" />
                    <h4>Makinda</h4>
                </div>
                <div className="divImageTitre">
                    <img src={usergirl} alt="" />
                    <h4>Makinda</h4>
                </div>
                <div className="divImageTitre">
                    <img src={usergirl} alt="" />
                    <h4>Makinda</h4>
                </div>
                <div className="divImageTitre">
                    <img src={usergirl} alt="" />
                    <h4>Makinda</h4>
                </div>
                <div className="divImageTitre">
                    <img src={usergirl} alt="" />
                    <h4>Makinda</h4>
                </div>
            </div>
        </div>
    );
}
