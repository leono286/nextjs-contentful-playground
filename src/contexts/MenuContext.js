"use client";
import React, { createContext, useState, useContext } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
