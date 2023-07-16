import React from "react";
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Navbar } from './components';
import './Home.css';
const Home = () => {
    return (
            
     <div className="App">

            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;
