import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

export const MyContext = React.createContext();

const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState("Furkan");

  const value ={
    myState,
    setMyState,
  }

  return (
    <MyContext.Provider
      value={value}
    >
      {children}
    </MyContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>
);
