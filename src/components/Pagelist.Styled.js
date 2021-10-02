import styled from "styled-components";

export const StyledPageList = styled.li`
  display: flex;
  flex-direction: column;
  color: #fff;
  text-decoration: none;
  & a {
    text-decoration: none;
    color: #fff;
    &::first-letter {
      text-transform: uppercase;
    }
    &:hover {
      cursor: pointer;
      color: blue;
    }
  }
`;
