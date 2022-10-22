import "./App.css";
import PageComponent from "./pages/PageComponent";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/inscription" element={<Signup />} />
                    <Route exact path="/chat" element={<PageComponent />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
