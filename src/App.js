import React from "react";
import "./App.css";
import PageComponent from "./pages/PageComponent";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import dataContext from "./components/dataContext";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [userData, setUserData] = useState();
  const [userInfo, setUserInfo] = useState("");

  return (
    <div>
      <dataContext.Provider
        value={{
          userData,
          setUserData,
          userInfo,
          setUserInfo,
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
