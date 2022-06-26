import styled from "styled-components";

import MainContainer from "../main-container/main-container.styles";

export const StarProdContainer = styled(MainContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  div:last-child {
    display: flex;
    flex-wrap: wrap;
    width: 46%;
  }
  img {
    transition: all 0.5s;
  }
  img:hover {
    box-shadow: 6px 6px 15px rgba(53, 53, 53, 0.363);
  }
`;
