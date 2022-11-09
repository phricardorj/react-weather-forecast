import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import icons from "../icons.json";

const Rsponse = () => {
  const global = React.useContext(GlobalContext);
  const data = global.response;

  if (!data) return null;
  if (data.cod === "404")
    return (
      <div
        style={{
          background: "red",
          color: "#fff",
          padding: "10px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <strong>Erro:</strong> Cidade ou Estado digitado não encontrado!{" "}
        <i>Revise e tente novamente.</i>
      </div>
    );

  return (
    <>
      <div style={{ display: "flex" }}>
        <i
          className={icons[data.weather[0].icon].icon}
          style={{
            fontSize: "8rem",
            color: "#000",
            margin: "0 0 1rem",
          }}
        ></i>
        <p style={{ fontSize: "2rem", textTransform: "Capitalize" }}>
          {data.weather[0]["description"]}
        </p>
      </div>
      <h3>Informações do Tempo:</h3>
      <ul>
        <li>Local: {data.name}</li>
        <li>Temperatura: {Math.round(data.main.temp)} °C</li>
        <li>
          Temperatura (Min/Max): {Math.round(data.main.temp_min)} °C /{" "}
          {Math.round(data.main.temp_max)} °C
        </li>
      </ul>
    </>
  );
};

export default Rsponse;
