import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"

import "../styles/App.css"

import Users from "./Users";
import Home from "./Home";
import User from "./User";
import OpenAPIschema from "../components/OpenAPIschema";


const App = () => {
    return (
        // <RouterProvider router={router} />
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
            </nav>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/:id" element={<User />} />
                    <Route path="/swagger" element={<OpenAPIschema />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;