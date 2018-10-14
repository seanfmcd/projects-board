import React from "react";
import StyledList from "../StyledList";
import StyledListItem from "../StyledListItem";

const ProjectList = ({ projects, click }) => (
  <StyledList>
    {projects.map(project => (
      <StyledListItem onClick={click} key={project}>
        {project}
      </StyledListItem>
    ))}
  </StyledList>
);

export default ProjectList;
