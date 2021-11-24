import React from 'react'
import './index.css' 
import VideoBg from '../../data/video/video.mp4'

const Hero = () => {
  return (
    <div className='hero_container'>
      <div className='hero_video_wrapper'>
        <video className='hero_video' src={VideoBg} type="video/mp4" autoPlay loop muted/>
      </div>
      <div className='hero_info_wrapper'>
          <h2>I am Joshua Magani</h2>
          <p>
            I'm Joshua, a junior frontend developer with an experience of 1+ years.
          </p>
      </div>
    </div>
  )
}

export default Hero

