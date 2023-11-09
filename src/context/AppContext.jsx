import React from "react";

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [expenses, setExpenses] = React.useState([]);
  return (
    <AppContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </AppContext.Provider>
  );
};
