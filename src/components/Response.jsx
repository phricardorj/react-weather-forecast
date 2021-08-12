import React from 'react'
import weatherIcons from '../icons.json'
import { dataAtual } from '../js/data_atual.js'

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
      <div className="card">
        <div className="card-body">
          <h1>{props.data.name}</h1>
          <h2>{Math.round(props.data.main.temp)} °C</h2>
          <h3 className="text-capitalize">
            {props.data.weather[0]['description']}
          </h3>
          <br />
          <h4>{dataAtual()}</h4>
        </div>
      </div>

      <div className="info my-3">
        <div className="row">
          <div className="col-md-6">
            <p>Pressão: {props.data.main.pressure} hPa</p>
            <p>Chuva: {props.data.clouds.all} %</p>
          </div>
          <div className="col-md-6">
            <p>
              Vento: {props.data.wind['deg']} ° |{' '}
              {Math.round(props.data.wind['speed'] * 3.6)} km/h
            </p>
            <p>Umidade: {props.data.main.humidity} %</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Response
