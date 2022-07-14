import React, { useContext } from "react";
import data from "../../data/data.json";
import { Nav, NavContainer, NavLink, Logo, SearchBox } from "./navbar.styles";
import { TbSearch } from "react-icons/tb";

import { NavHoverContext } from "../../context/nav-hover-context/nav-hover.context";

const Navbar = () => {
  const { updateHoverState } = useContext(NavHoverContext);
  const mouseHandler = (idx) => {
    updateHoverState(idx);
  };
  return (
    <NavContainer onMouseLeave={() => mouseHandler()}>
      <Nav>
        <Logo>
          <NavLink to={"/"}>
            <img id="logoImage" src={data.logo} alt="" />
          </NavLink>
        </Logo>
        <NavLink onMouseEnter={() => mouseHandler(0)} to={"/xiomiphones"}>
          Xiomi Phones
        </NavLink>
        <NavLink onMouseEnter={() => mouseHandler(1)} to={"/redmiphones"}>
          Redmi Phones
        </NavLink>
        <NavLink onMouseEnter={() => mouseHandler(2)} to={"/tv"}>
          TV
        </NavLink>
        <NavLink onMouseEnter={() => mouseHandler(3)} to={"/laptop"}>
          Laptop
        </NavLink>
        <NavLink onMouseEnter={() => mouseHandler(4)} to={"/fitness"}>
          Fitness
        </NavLink>
        <NavLink onMouseEnter={() => mouseHandler(5)} to={"/home"}>
          Home
        </NavLink>
        <NavLink onMouseEnter={() => mouseHandler(6)} to={"/audio"}>
          Audio
        </NavLink>
        <NavLink onMouseEnter={() => mouseHandler(7)} to={"/accessories"}>
          Accessories
        </NavLink>
        <SearchBox>
          <input type="text" placeholder="Search Products" />
          <TbSearch />
        </SearchBox>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
