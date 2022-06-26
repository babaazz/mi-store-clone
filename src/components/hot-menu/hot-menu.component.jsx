import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

import { HotMenuContainer, HotLink } from "./hot-menu.styles";
import "./hot-menu.styles.css";

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
  const hoverHandler = (path, index) => {
    setHoverState(hoverState.map((_, idx) => (idx === index ? true : false)));
  };
  return (
    <>
      <HotMenuContainer>
        {paths.map((item, index) => (
          <HotLink
            to={item.path}
            onMouseEnter={() => {
              hoverHandler(item.path, index);
              Navigate(item.path);
            }}
            key={index}
            className={`${hoverState[index] ? "current" : ""}`}
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
