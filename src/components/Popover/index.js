import styled from "styled-components";

const Popover = styled.div`
  position: fixed;
  height: 90vh;
  width: 90vw;
  top: 5vh;
  left: 5vw;
  background-color: white;
  border: 1px solid black;
  box-shadow: 3px 3px black;
  display: ${props => (props.open ? "inherit" : "none")};
`;

export default Popover;
