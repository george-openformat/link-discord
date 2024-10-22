import { PrivyProvider } from "@privy-io/react-auth";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <PrivyProvider appId={process.env.PRIVY_APP_ID as string}>
      <App />
    </PrivyProvider>
  </React.StrictMode>
);
