import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [history, setHistory] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");
  const [response, setResponse] = React.useState(null);
  const numberHistoryDisplay = 4;

  React.useEffect(() => {
    const historyData = JSON.parse(localStorage.getItem("history"));
    if (historyData != null && historyData.length >= 1) setHistory(historyData);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const updateHistory = (searchInput) => {
    if (!searchInput) return null;
    if (history.find((element) => element === searchInput)) return null;
    if (history.length > numberHistoryDisplay - 1) {
      history.shift();
      setHistory(history);
    }
    setHistory([...history, searchInput]);
  };

  return (
    <GlobalContext.Provider
      value={{
        history,
        searchInput,
        response,
        setHistory,
        setSearchInput,
        setResponse,
        updateHistory,
        numberHistoryDisplay,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
