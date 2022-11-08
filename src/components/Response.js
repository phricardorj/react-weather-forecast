import React from "react";
import { GlobalContext } from "../context/GlobalContext";

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
      <h3>Informações do Tempo:</h3>
      <ul>
        <li>Local: {data.name}</li>
        <li>Temperatura: {Math.round(data.main.temp)} °C</li>
        <li>
          Temperatura (Min/Max): {Math.round(data.main.temp_min)} °C /{" "}
          {Math.round(data.main.temp_max)} °C
        </li>
        <li>{data.weather[0]["description"]}</li>
        <li>icon: {data.weather[0].icon}</li>
      </ul>
    </>
  );
};

export default Rsponse;
