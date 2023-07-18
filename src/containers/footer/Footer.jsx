import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';
import {Link} from "react-router-dom";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">If you want to stay ahead of the curve</h1>
    </div>

    <div className="gpt3__footer-btn">
    <Link class="footer_link" to="../../RegisterPage">Register now</Link>
    
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p><a href='https://github.com/omkar2711/S_IID' alt="github">Github</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Omkar</p>
        <p>7057006704</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <p>omkarbharitkar79@gmail.com</p>
        <p>portfolio</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 SIID. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;