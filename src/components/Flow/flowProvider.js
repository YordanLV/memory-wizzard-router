import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";

export const FlowContext = createContext();

const FlowProvider = ({ children }) => {
  const history = useHistory();
  const [screens, setScreens] = useState([])
  const [currentScreen, setCurrentScreen] = useState(0);

  const goToScreen = (screenIndex) => {
    setCurrentScreen(screenIndex);
    history.push(`/screen-${screenIndex}`);
  }

  return (
    <FlowContext.Provider value={{ currentScreen, setCurrentScreen, screens, setScreens, goToScreen }}>
      {children}
    </FlowContext.Provider>
  );
};

export default FlowProvider;