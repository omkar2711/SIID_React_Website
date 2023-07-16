import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Real Time Monitoring',
    text: 'By leveraging advanced connectivity and data analysis, SIID provides real-time updates and alerts to relevant stakeholders, enhancing the effectiveness of the device in promoting responsible driving practices.',
  },
  {
    title: 'Increase Road Saftey',
    text: 'By incorporating advanced technologies and promoting responsible driving behavior, SIID is dedicated to increasing road safety and reducing the risks associated with impaired driving.',
  },
  {
    title: 'Data-Driven Insights',
    text: 'collects and analyzes valuable data related to driver behavior and compliance. These insights provide a comprehensive overview of alcohol consumption patterns, adherence to safety measures, and potential areas of improvement.',
  },
  {
    title: 'Behavioral Modification',
    text: 'encourages drivers to make conscious choices and avoid driving under the influence. This behavioral shift fosters a culture of responsible driving, reducing the incidence of accidents caused by impaired driving.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Choose SIID for Unmatched Road Safety.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;