import React from 'react'
import "./whatGPT3.css";
import { Feature } from '../../components';
 
const WhatGPT3 = () => {
  return (
    <div>
    <div className='gpt3__brand'></div>
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is SIID" text="SIID (Smart Ignition Interlock Device) is an advanced technology designed to revolutionize vehicle safety and combat drunk driving. By integrating cutting-edge features, SIID ensures that every driver on the road is responsible and committed to safe driving practices." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>Ignite a Safer Future with SIID</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
      <Feature title="Advanced Breathalyzer"  text="SIID incorporates state-of-the-art breathalyzer technology to accurately measure the driver's blood alcohol content (BAC) before allowing the vehicle to start. "/>
      <Feature title="Enhanced Vehicle Security"  text="SIID goes beyond alcohol detection by incorporating robust security measures to protect the vehicle from theft and unauthorized access."/>
      <Feature title="Preventing Drunk Driving"  text="SIID plays a vital role in preventing drunk driving incidents and their potential consequences."/>
      </div>
    </div>
    </div>
  )
}

export default WhatGPT3
