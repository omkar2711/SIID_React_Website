import React, { useState } from 'react'
import "./SignUp.css";
import ai from "../assets/ai.png";
import { Link } from 'react-router-dom';



const SignUp = () => {

  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [check, setCheck] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handelCheck = () => {
    if (user.email === '' || user.password === '' || user.confirmPassword === '' || user.fname === '') {
      alert("Complete all the details!");
      setIsSubmitted(false);
    }
    else {
      setIsSubmitted(true);
    }

    if (user.password === user.confirmPassword && user.password !== '' && user.confirmPassword !== '') {
      setCheck(true);
    }
    else {
      alert("Password Is Not Confirmed!");
      setCheck(false);
    }
  }


  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };





  const renderForm = (
    <div >
      <form className="form" >
      <div className='name'>
      <div className="input-container">
          <label className='Label'>Fname:</label>
          <input
            type="fname"
            name="fname"
            value={user.fname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label className='Label'>Lname:</label>
          <input
            type="lname"
            name="lname"
            value={user.lname}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className='details'>
        <div className="input-container">
          <label className='Label'>Email: </label>

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />

        </div>
        <div className="input-container">
          <label className='Label'>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            required
          />

        </div>
        <div className="input-container">
          <label className='Label '>
            Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
       
        </div>
        
      </form>
      <div className="button-container">
          <button type="submit" onClick={handelCheck}  onMouseOver={(e) => e.target.style.color = 'DarkBlue'}
                    onMouseOut={(e) => e.target.style.color = 'White'} >Submit</button>
        </div>

    </div>
  );
  return (
    <div className='gpt3__header section__padding' id='SignUpPage'>
      <div className='gpt3__header-content'>

        <div className="app">
          <div>
            {
              isSubmitted === true && check === true ?
                <div>
                <h1 className='gradient__text'>User is successfully Signed Up!</h1></div> :
                <h1 className='gradient__text'>Sign Up for better Future</h1>
            }
            {
              isSubmitted === true && check === true ?
                <div >
                <Link className="linkHomePage"  to="/#home"  onMouseOver={(e) => e.target.style.color = 'DarkBlue'}
                    onMouseOut={(e) => e.target.style.color = 'White'} >Home Page</Link>
                    
                </div> : renderForm
            }
            
          </div>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  )
}

export default SignUp
