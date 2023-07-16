import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Stay Informed and Stay Safe</h4>
      <h1 className="gradient__text">Get Real-Time  <br /> Notifications on Our App</h1>
      <p>With our dedicated app, you can experience the power of real-time notifications and stay informed about your SIID's activity at all times. Our app is designed to provide you with instant updates, ensuring that you are always aware of important events related to your device and driving safety. </p>
      {/* <h4>Request Early Access to Get Started</h4> */}
    </div>
  </div>
);

export default Possibility;