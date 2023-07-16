import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from './SignUp/SignUpPage';
import RegisterPage from './Registration/RegisterPage';
import App from './App'
import './index.css';

ReactDOM.render(
    <BrowserRouter>
    <Routes>
        <Route index element={<App />} />
        <Route path="SignUpPage" element={<SignUpPage />}/>
        <Route path="RegisterPage" element={<RegisterPage />} /> 
    </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);