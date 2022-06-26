import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

import { HotMenuContainer, HotLink } from "./hot-menu.styles";

const HotMenu = () => {
  const paths = [
    { path: "/music", name: "Music" },
    { path: "/smartDevices", name: "Smart Devices" },
    { path: "/home", name: "Home" },
    { path: "/lifestyle", name: "Lifestyle" },
    { path: "/mobile", name: "Mobile Accessories" },
  ];
  const initialHoverState = [true, false, false, false, false];
  const [hoverState, setHoverState] = useState(initialHoverState);
  const Navigate = useNavigate();
  const hoverHandler = (index) => {
    setHoverState(hoverState.map((_, idx) => (idx === index ? true : false)));
  };
  const hoverStyle = {
    textDecoration: "none",
    color: "orangered",
    borderBottom: "1px solid orangered",
  };
  return (
    <>
      <HotMenuContainer>
        {paths.map((item, index) => (
          <HotLink
            to={item.path}
            onMouseEnter={() => {
              hoverHandler(index);
              Navigate(item.path);
            }}
            key={index}
            style={hoverState[index] ? hoverStyle : {}}
          >
            {item.name}
          </HotLink>
        ))}
      </HotMenuContainer>
      <Outlet />
    </>
  );
};

export default HotMenu;
