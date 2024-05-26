import React, { createContext, useContext, useState } from "react";

const NavigationHistoryContext = createContext();

export const useNavigationHistory = () => useContext(NavigationHistoryContext);

export const NavigationHistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addPageToHistory = (page) => {
    setHistory((prevHistory) => {
      if (
        prevHistory.length === 0 ||
        prevHistory[prevHistory.length - 1] !== page
      ) {
        return [...prevHistory, page];
      }
      return prevHistory;
    });
  };

  return (
    <NavigationHistoryContext.Provider value={{ history, addPageToHistory }}>
      {children}
    </NavigationHistoryContext.Provider>
  );
};
