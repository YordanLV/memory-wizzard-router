import React from "react";
import { Link, withRouter } from "react-router-dom";
import useFlowControls from "./useFlowControls";

const Controls = withRouter(() => {
  const [nextScreen, prevScreen] = useFlowControls();
  return (
    <>
      <div>
        <Link to={`/screen-0`}>Link To Screen-0</Link>
      </div>
      <div>
        <Link to={`/transaction-tracker`}>Link to transaction-tracker</Link>
      </div>
      <div>
        <Link to={`/transaction-tracker/final-page`}>
          Link to transaction-tracker/final-page
        </Link>
      </div>
      <div>
        <button>History push to Transaction-Page</button>
        <button onClick={prevScreen}>{'<'}</button>
        <button onClick={nextScreen}>{'>'}</button>
      </div>
    </>
  );
});

export default Controls;
