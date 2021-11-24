import React from 'react'
import { skills } from '../../data/SkillsData/SkillsData'
import SkillCard from '../../components/SkillCard'
import './index.css'
const Skills = () => {
  return (
    <div className='skills_container'>
      <h2 className='skills_header'>Skill Sets</h2>
      <div className='skills_wrapper'>
        {
          skills.map((skill) => (
            <SkillCard key={skill.id} skills={skill}/>
          ))
        }
      </div>
    </div>
  )
}

export default Skills
