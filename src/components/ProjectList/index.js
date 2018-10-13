import React from 'react'

const ProjectList = ({ projects }) => (
  <ul>
    {projects.map(project => <li key={project} >{project}</li>)}
  </ul>
)

export default ProjectList
