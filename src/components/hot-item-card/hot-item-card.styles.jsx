import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 31%;
  transition: all 0.2s ease-in;
  margin: 0.4rem;
  img {
    width: 70%;
  }
  p,
  span {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: 800;
    font-size: 0.9rem;
    color: rgb(83, 83, 83);
  }
  span {
    color: orangered;
    margin: -0.6rem 0 1rem 0;
  }
  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 6px 6px rgba(53, 53, 53, 0.363);
  }
`;
