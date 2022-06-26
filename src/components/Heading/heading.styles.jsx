import styled from "styled-components";

import MainContainer from "../main-container/main-container.styles";

export const HeadingContainer = styled(MainContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  p {
    margin: 2rem 2rem 2rem 2rem;
    font-size: 2rem;
    color: rgb(130, 130, 130);
    font-weight: 100;
    font-family: "Trebuchet MS", Calibri, sans-serif;
  }
`;
export const Line = styled.div`
  height: 1px;
  width: 24vw;
  background-color: rgb(130, 130, 130);
`;
