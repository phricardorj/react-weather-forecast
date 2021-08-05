import React from 'react'
import weatherIcons from './icons.json'

function Response(props) {
  let prefix = 'wi wi-',
    code = props.data.weather[0]['id'],
    icon = weatherIcons[code].icon

  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    icon = 'day-' + icon
  }

  let iWeather = prefix + icon

  return (
    <>
      <code>Ícone: {iWeather}</code>
      <h1>{props.data.name}</h1>
      <p>Temperatura: {parseInt(props.data.main.temp)} °C</p>
      <p>Temperatura: {parseInt(props.data.main.temp)} °C</p>
      <p>Descrição: {props.data.weather[0]['description']}</p>
      <p>Chuva: {props.data.clouds.all} %</p>
      <p>Umidade: {props.data.main.humidity} %</p>
      <p>Pressão: {props.data.main.pressure} hPa</p>
      <p>Vento: {props.data.wind['deg']} °</p>
      <p>Velocidade do Vento: {props.data.wind['speed']} m/s</p>
    </>
  )
}

export default Response