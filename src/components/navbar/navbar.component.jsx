import React from "react";
import data from "../../data/data.json";
import { Nav, NavContainer, NavLink, Logo, SearchBox } from "./navbar.styles";
import { TbSearch } from "react-icons/tb";

const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <Logo>
          <NavLink to={"/"}>
            <img id="logoImage" src={data.logo} alt="" />
          </NavLink>
        </Logo>
        <NavLink to={"/xiomiphones"}>Xiomi Phones</NavLink>
        <NavLink to={"/redmiphones"}>Redmi Phones</NavLink>
        <NavLink to={"/tv"}>TV</NavLink>
        <NavLink to={"/laptop"}>Laptop</NavLink>
        <NavLink to={"/fitness"}>Fitness</NavLink>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/audio"}>Audio</NavLink>
        <NavLink to={"/accessories"}>Accessories</NavLink>
        <SearchBox>
          <input type="text" placeholder="Search Products" />
          <TbSearch />
        </SearchBox>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
