import React from 'react'
import "./header.css";
import people from "../../assets/people.png";
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
    
      <div className='gpt3__header-content'>
      
        <h1 className='gradient__h1'>Unlock a Safer Future on the Roads with SIID</h1>
        <p>Welcome to the official website of SIID, the Smart Ignition Interlock Device. Our state-of-the-art technology is changing the game in vehicle safety, combatting drunk driving, and promoting responsible habits on the road.</p>
        <div className='getStarted'>

          <Link className='getStartedbtn' onMouseOver={(e) => e.target.style.color = 'DarkBlue'}
            onMouseOut={(e) => e.target.style.color = 'White'} to='../../RegisterPage'>Get Started</Link>

        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>Securing 16,000 Lives Annually: Unleashing SIID's Powerful Future Impact</p>
        </div>
      </div>
      <div className='gpt3__header-image'>

      </div>
    </div>
  )
}

export default Header
