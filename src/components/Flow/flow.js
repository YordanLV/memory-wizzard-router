import React, { useContext, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import { FlowContext } from "./flowProvider";

export const Screen = ({ children }) => children;

const Flow = withRouter(({ children }) => {
  const { setScreens } = useContext(FlowContext);
  const screens = React.Children.toArray(children);
  useEffect(() => {
    setScreens(screens);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {screens.map((screen, index) => {
        const { name } = screen.props;
        return (
          <Route key={index} path={[`/screen-${index}`, `/${name}`]}>
            {screen}
          </Route>
        );
      })}
    </>
  );
});

export default Flow;
