import React from "react";
import "./App.css";
import PageComponent from "./pages/PageComponent";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import dataContext from "./components/dataContext";
import { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [userData, setUserData] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [findChat, setFindChat] = useState("");
  const [afficherMessage, setAfficherMessage] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5500/message/${findChat}`)
      .then((res) => {
        setAfficherMessage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userInfo._id]);

  console.log(afficherMessage);
  return (
    <div>
      <dataContext.Provider
        value={{
          userData,
          setUserData,
          userInfo,
          setUserInfo,
          afficherMessage,
          setAfficherMessage,
          findChat,
          setFindChat,
        }}
      >
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/inscription" element={<Signup />} />
            <Route exact path="/chat" element={<PageComponent />} />
          </Routes>
        </Router>
      </dataContext.Provider>
    </div>
  );
}

export default App;
