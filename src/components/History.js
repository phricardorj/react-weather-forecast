import React from "react";
import { GlobalContext } from "../context/GlobalContext";

const History = () => {
  const global = React.useContext(GlobalContext);

  return (
    <>
      {global.history.length <= 0
        ? false
        : true && (
            <div style={{ marginTop: "2.5rem" }}>
              <p>Seu Histórico de Pesquisa ({global.history.length}):</p>
              <ul
                style={{
                  border: "2px solid #62dafc",
                  padding: "15px",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  listStyle: "none",
                  gap: "2rem",
                  width: "100%",
                }}
              >
                {global.history.map((historyData, index) => (
                  <li
                    key={index}
                    onClick={() => global.setSearchInput(historyData)}
                    style={{
                      background: "#62dafc",
                      color: "#035c75",
                      padding: "10px",
                      borderRadius: "10px",
                      textTransform: "uppercase",
                      margin: "0",
                      flex: "1 1 160px",
                      textAlign: "center",
                      minHeight: "50px",
                      minWidth: "100px",
                      cursor: "pointer",
                    }}
                  >
                    {historyData}
                  </li>
                ))}
              </ul>
            </div>
          )}
    </>
  );
};

export default History;
