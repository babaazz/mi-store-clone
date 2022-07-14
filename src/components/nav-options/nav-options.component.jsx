import React, { useContext } from "react";
import NavCard from "../nav-card/nav-card.component";
import "./nav-options.styles.css";

import { NavHoverContext } from "../../context/nav-hover-context/nav-hover.context";

const NavOptions = ({ data }) => {
  const { hoverState } = useContext(NavHoverContext);
  const {
    miPhones,
    redmiPhones,
    tv,
    laptop,
    fitnessAndLifeStyle,
    home,
    audio,
    accessories,
  } = data;
  return (
    <div className="navOptions">
      {hoverState[0] &&
        miPhones.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}

      {hoverState[1] &&
        redmiPhones.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}

      {hoverState[2] &&
        tv.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}

      {hoverState[3] &&
        laptop.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}

      {hoverState[4] &&
        fitnessAndLifeStyle.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}

      {hoverState[5] &&
        home.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}

      {hoverState[6] &&
        audio.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}

      {hoverState[7] &&
        accessories.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}
    </div>
  );
};

export default NavOptions;
