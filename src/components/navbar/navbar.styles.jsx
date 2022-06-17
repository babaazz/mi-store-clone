import styled from "styled-components";

import { Link } from "react-router-dom";

import MainContainer from "../main-container/main-container.styles";

export const NavContainer = styled.div`
  background-color: white;
`;

export const Nav = styled(MainContainer)`
  z-index: 1000;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(43, 43, 43, 0.137);
`;

export const NavLink = styled(Link)`
  color: rgb(59, 59, 59);
  text-decoration: none;
  margin: 1rem 1.3rem;
  font-weight: 500;
  font-size: 0.9rem;
  &:hover {
    color: orangered;
    text-decoration: none;
  }
`;

export const Logo = styled.div`
  background-color: orangered;
  width: 58px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 2rem;
  ${NavLink} {
    position: relative;
    right: 19px;
    img {
      transform: translateX(-55px);
    }
    img:hover {
      transition: all 0.2s ease-in;
      transform: translateX(0);
    }
  }
`;

// export const LogoImage = styled(NavLink)`
//   position: relative;
//   right: 74px;
//   &:hover {
//       transition: all
//   }
// `

export const SearchBox = styled.div`
  margin-left: 8rem;
  input {
    border: none;
    border-bottom: 1px solid rgba(128, 128, 128, 0.76);
    width: 12rem;
    outline: none;
    font-size: 1.2rem;
  }
`;
