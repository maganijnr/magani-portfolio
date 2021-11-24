import React from 'react'
import './index.css'
import MyImage from '../../images/me.jpg' 

const About = () => {
  return (
    <div className='about_container'>
      <h2 className='about_header'>About Me</h2>
      <div className='about_info_wrapper'>
        <div className='about_left'>
          <div className='about_img_bg'></div>
          <div className='about_img'>
            <img src={MyImage} alt='' className="me_img"/>
          </div>
        </div>
        <div className='about_right'>
          <p>
            Hello there, I am Joshua Magani. I began my coding journey 2 years ago by writing my first <strong>Hello World program</strong>. I'm pationate about learning and engaing interesting projects to help with my growth.
            I am a <strong>freelancer</strong> as well as a full time <strong>full time</strong> type of person with a bit of experience in building Ecommerce platforms for small business. 
            In my spare time, I love to watch movies and tv shows, play soccer or video games.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
