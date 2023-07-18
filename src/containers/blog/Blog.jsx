import React from 'react';
import Article from '../../components/article/Article';
import { blog1, blog2, blog3, blog4, blog5 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">For more information, <br /> please explore additional resources. </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
      <Article imgUrl={blog1} date="Dec 28, 2022" text="Drink and Drive : 26000 cases booked in 2022" link="https://www.thehansindia.com/karnataka/drink-and-drive-26000-cases-booked-in-2022-775192#:~:text=Drunk%20driving%20cases%20are%20highest,November%20this%20year%20(2022)."/>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog2} date="Sep 26, 2022" text="Prevention of Drinking and Driving" link="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6876524/"/>
        <Article imgUrl={blog3} date="Aug 02, 2022" text="Road Safety Solution for Drunken Driving" link="https://www.electronicsforu.com/electronics-projects/prototypes/road-safety-solution-for-drunken-driving" />
        <Article imgUrl={blog4} date="June 29, 2021" text="A Smart Solution with Ignition Interlock Device to Prevent Drunk-Driving Accidents" link="https://ieeexplore.ieee.org/document/9463527" />
        <Article imgUrl={blog5} date="Sep 26, 2021" text="How tech will soon protect us on the road" link="https://thenextweb.com/news/how-anti-drunk-driving-tech-will-soon-protect-us-on-the-road" />
      </div>
    </div>
  </div>
);

export default Blog;