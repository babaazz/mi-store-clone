import styled from "styled-components";

import MainContainer from "../main-container/main-container.styles";
import { Link } from "react-router-dom";

export const HotMenuContainer = styled(MainContainer)`
  display: flex;
  justify-content: center;
`;

export const HotLink = styled(Link)`
  text-decoration: none;
  color: rgb(94, 94, 94);
  margin: 2rem;
  padding: 0.5rem 0;
  &:hover {
    text-decoration: none;
    color: orangered;
    border-bottom: 1px solid orangered;
  }
`;
