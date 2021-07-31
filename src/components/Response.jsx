import React from 'react'

function Response(props) {
  return (
    <>
      <section className="current-weather">
        <h1>{props.city}</h1>
        <img
          src={
            'http://openweathermap.org/img/wn/' +
            props.data.weather[0]['icon'] +
            '.png'
          }
        ></img>
        <p>Temperatura: {parseInt(props.data.main.temp)} °C</p>
        <p>Descrição: {props.data.weather[0]['description']}</p>
        <p>Chuva: {props.data.clouds.all} %</p>
        <p>Umidade: {props.data.main.humidity} %</p>
        <p>Pressão: {props.data.main.pressure} hPa</p>
        <p>Vento: {props.data.wind['deg']} °</p>
        <p>Velocidade do Vento: {props.data.wind['speed']} m/s</p>
      </section>
    </>
  )
}

export default Response
