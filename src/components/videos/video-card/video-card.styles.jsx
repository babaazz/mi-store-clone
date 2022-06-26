import styled from "styled-components";

export const VideoCardContainer = styled.div`
  width: 30%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 1rem;
  cursor: pointer;
  a {
    padding: 0.4rem 2rem;
    transition: all 0.2s;
    border: none;
    text-decoration: none;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    color: white;
    font-size: 1.2rem;
  }
  &:hover {
    a {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;
