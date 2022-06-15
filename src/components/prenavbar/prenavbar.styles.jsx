import styled from "styled-components";

export const PrenavContainer = styled.div`
  background-color: rgb(29, 28, 28);
`;

export const PreNav = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  color: white;
  div {
    padding: 0 3.5rem;
    display: flex;
    align-items: center;
    span {
      color: rgba(180, 180, 180, 0.644);
      font-size: 0.8rem;
      font-weight: 100;
    }
    a {
      display: flex;
      align-items: center;
      color: rgb(180, 180, 180);
      font-size: 0.8rem;
      font-family: "Gill Sans", "Gill Sans MT", Calibri,
        "Trebuchet MS" Sans-serif;
      font-weight: 300;
      margin: 1rem;
      text-decoration: none;
      .cart {
        font-size: 1.2rem;
        margin-right: 0.2rem;
      }
    }
  }
`;
