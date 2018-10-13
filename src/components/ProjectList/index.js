import React from 'react'
import StyledList from '../StyledList'
import StyledListItem from '../StyledListItem'

const ProjectList = ({ projects }) => (
  <StyledList>
    {projects.map(project => (
      <StyledListItem key={project} >{project}</StyledListItem>
    ))}
  </StyledList>
)

export default ProjectList
