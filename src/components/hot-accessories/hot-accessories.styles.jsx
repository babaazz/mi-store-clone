import styled from "styled-components";

import MainContainer from "../main-container/main-container.styles";

export const HAContainer = styled(MainContainer)`
  display: flex;
`;

export const Cover = styled.div`
  margin-top: 0.4rem;
  img {
    cursor: pointer;
    transition: all 0.2s ease-in;
  }
  img:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 6px 6px rgba(53, 53, 53, 0.363);
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 0.5rem;
`;
