import React from 'react';
import { Link } from 'react-router-dom';
import './cta.css';

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
   
    <div className='gpt3__cta-btn'>

      <Link className='getStartedbtn-blk' onMouseOver={(e) => e.target.style.color = 'DarkBlue'}
        onMouseOut={(e) => e.target.style.color = 'White'} to='../../RegisterPage'>Get Started</Link>

    </div>
  </div>
);

export default CTA;