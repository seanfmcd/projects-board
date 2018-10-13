import styled from 'styled-components'

const StyledListItem = styled.li`
  ::after {
    content: "|";
    padding: 0 6px;
  }
  :last-child::after {
    content: none;
  }
`

export default StyledListItem
