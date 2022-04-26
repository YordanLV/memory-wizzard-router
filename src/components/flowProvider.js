import React, { useState, createContext } from "react";
import {MemoryRouter as Router} from 'react-router-dom';

export const FlowContext = createContext();

const FlowProvider = ({ children }) => {
  const [screens, setScreens] = useState([])
  const [currentScreen, setCurrentScreen] = useState(0);
  return (
    <FlowContext.Provider value={{ currentScreen, setCurrentScreen, screens, setScreens }}>
      <Router>
      {children}
      </Router>
    </FlowContext.Provider>
  );
};

export default FlowProvider;