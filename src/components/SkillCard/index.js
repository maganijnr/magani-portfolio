import React from 'react'
import Rating from '../RatingComponent'
import './index.css'

const SkillCard = ({skills}) => {
  const {skillTitle,skillLevel} = skills
  return (
    <div className='skill_card'>
      <h2>{skillTitle}</h2>
      <Rating value={skillLevel}/>
    </div>
  )
}

export default SkillCard
