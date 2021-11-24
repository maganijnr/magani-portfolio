import React from 'react'
import './index.css'
import {projects} from '../../data/ProjectsData/ProjectsData'
const Projects = () => {
  return (
    <div className='projects_container'>
      <h2 className='projects_header'>Projects</h2>
      <div className='projects_wrapper'>
        {
          projects.map((project) => (
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
              <div className='project_card' key={project.id}>
                <div className='card_img_wrapper'>
                  <img src={project.projectImg} alt='' className='card_img'/>
                </div>
                <div className='card_body'>
                  <h2>{project.projectTitle}</h2>
                  <h5>{project.projectStack}</h5>
                  <p>{project.projectDesc}</p>
                </div>
              </div>
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
