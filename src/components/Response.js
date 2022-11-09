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
          margin: "2rem 0",
        }}
      >
        <strong>Erro:</strong> Cidade ou Estado digitado não encontrado!{" "}
        <i>Revise e tente novamente.</i>
      </div>
    );

  return (
    <div style={{ margin: "3rem 0 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        <i
          className={icons[data.weather[0].icon].icon}
          style={{
            fontSize: "8rem",
            color: "#62dafc",
          }}
        ></i>
        <div style={{ textAlign: "right", lineHeight: "1.5rem" }}>
          <h1 style={{ textTransform: "capitalize", fontSize: "3rem" }}>
            {data.name}
          </h1>
          <p
            style={{
              textTransform: "capitalize",
              fontSize: "1.5rem",
            }}
          >
            <strong style={{ color: "#000" }}>
              {data.weather[0]["description"]}
            </strong>
          </p>
        </div>
      </div>
      <div
        style={{
          border: "2px solid #62dafc",
          borderRadius: "10px",
        }}
      >
        <ul style={{ padding: "20px" }}>
          <li>
            <strong>Temperatura:</strong> {Math.round(data.main.temp)} °C (
            {Math.round(data.main.temp_min)} °C /{" "}
            {Math.round(data.main.temp_max)} °C)
          </li>
          <li>
            <strong>Chuva:</strong> {data.clouds.all}%
          </li>
          <li>
            <strong>Umidade:</strong> {data.main.humidity}%
          </li>
          <li>
            <strong>Pressão:</strong> {data.main.pressure} hPa
          </li>
          <li>
            <strong>Vento:</strong> {data.wind["deg"]} °
          </li>
          <li>
            <strong>Velocidade do Vento:</strong> {data.wind["speed"]} m/s
          </li>
          <li>
            <strong>Velocidade do Vento:</strong>{" "}
            {Math.round(data.wind["speed"] * 3.6)} km/h
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rsponse;
