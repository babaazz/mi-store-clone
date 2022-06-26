import styled from "styled-components";

export const ReviewConatiner = styled.div`
  margin: 0.4rem;
  background-color: white;
  padding-bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in;
  width: 50%;
  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 6px 15px rgba(53, 53, 53, 0.363);
  }
  img {
    width: 100%;
  }
  h5 {
    color: rgb(94, 94, 94);
    margin: 1rem 0 0.2rem 1rem;
  }
  span {
    color: rgb(94, 94, 94);
    font-size: 0.8rem;
    margin: 0 1.1rem;
  }
  b {
    font-size: 0.8rem;
    color: orangered;
  }
`;
