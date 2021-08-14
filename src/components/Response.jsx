import React from 'react'
import weatherIcons from '../../public/icons.json'
import { dataAtual } from '../js/data_atual.js'

function Response(props) {
  let iWeather = weatherIcons[props.data.weather[0].icon].icon

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="iWeather display-1 p-4">
            <i className={iWeather}></i>
          </div>
          <h1>{props.data.name}</h1>
          <h2>{Math.round(props.data.main.temp)} °C</h2>
          <p>
            {Math.round(props.data.main.temp_min)} °C /{' '}
            {Math.round(props.data.main.temp_max)} °C
          </p>
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
            <p>
              <i className="wi wi-windy"></i> Pressão:{' '}
              {props.data.main.pressure} hPa
            </p>
            <p>
              <i className="wi wi-rain"></i> Chuva: {props.data.clouds.all} %
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <i className="wi wi-strong-wind"></i> Vento:{' '}
              {props.data.wind['deg']} ° |{' '}
              {Math.round(props.data.wind['speed'] * 3.6)} km/h
            </p>
            <p>
              <i className="wi wi-humidity"></i> Umidade:{' '}
              {props.data.main.humidity} %
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Response
