import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FlowContext } from "./flowProvider";

const useFlowControls = () => {
  const history = useHistory();
  const { currentScreen, setCurrentScreen, screens } = useContext(FlowContext);

  const totalScreens = screens.length;

  const nextScreen = () => {
    if (currentScreen < totalScreens - 1) {
      setCurrentScreen(currentScreen + 1);
      history.push(`/screen-${currentScreen + 1}`);
    }
  };

  const prevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
      history.push(`/screen-${currentScreen - 1}`);
    }
  };

  return [nextScreen, prevScreen];
};

export default useFlowControls;
