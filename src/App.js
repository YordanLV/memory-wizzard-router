import React from "react";
import FlowProvider from "./components/flowProvider";
import Flow, { Screen } from "./components/flow";

import Controls from "./components/controls";

const LoginForm = () => {
  return <h3>Login Form</h3>;
};

const TransactionPage = () => {
  return <h3>Transaction Page</h3>;
};

const TransactionTracker = () => {
  return <h3>Transaction Tracker</h3>;
};

const FinalPage = () => {
  return <h3>Final Page</h3>;
};

export default function MyFlowSetup() {
  return (
    <FlowProvider>
      <Controls />
      <section className="App">
        <Flow>
          <Screen name="login-form">
            <LoginForm />
          </Screen>
          <Screen name="transaction-page">
            <TransactionPage />
          </Screen>
          <Screen name="transaction-tracker">
            <TransactionTracker />
          </Screen>
          <Screen name="final-page">
            <FinalPage />
          </Screen>
        </Flow>
      </section>
    </FlowProvider>
  );
}
