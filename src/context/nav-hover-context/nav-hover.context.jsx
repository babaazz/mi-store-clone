import React, { useState, createContext } from "react";

export const NavHoverContext = createContext({
  hoverState: [],
  updateHoverState: () => null,
});

export default function NavHoverProvider({ children }) {
  const initialHoverState = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  const [hoverState, setHoverState] = useState(initialHoverState);

  const updateHoverState = (idx) => {
    setHoverState(hoverState.map((_, index) => (index === idx ? true : false)));
  };
  const value = {
    hoverState,
    updateHoverState,
  };

  return (
    <NavHoverContext.Provider value={value}>
      {children}
    </NavHoverContext.Provider>
  );
}
