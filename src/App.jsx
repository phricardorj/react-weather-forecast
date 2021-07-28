import React, { useState } from 'react'
import './App.css'
import { api } from './services/api'
import { Icon } from '@iconify/react'
import bookmarkIcon from '@iconify-icons/bi/bookmark'
import bookmarkFill from '@iconify-icons/bi/bookmark-fill'
import bubbleLoading from '@iconify-icons/eos-icons/bubble-loading'

function App() {
  const [data, setData] = useState(null),
    [search, setSearch] = useState(''),
    [city, setCity] = useState('')

  async function handleGetWeather(event) {
    event.preventDefault()

    document.querySelector('button').innerText = "<Icon icon={bubbleLoading} /> Carregando..."

    const response = await api.get(
      'weather?q=' +
        search +
        ',br&units=metric&appid=94330ca3439ac3ac99ddbdd0e800e8fb&mode=json&lang=pt_br'
    )
    
    document.querySelector('button').innerText = "Pesquisar"

    setData(response.data)
    setCity(response.data.name)
  }

  return (
    <div className="container">
      <div className="app">
        <header>
          <h1>🌥️ Clima Brasil</h1>
          <code>Aplicação React Js</code>
          <code id="version">v1.1</code>

          <p id="info">Pesquise abaixo:</p>
          <form onSubmit={handleGetWeather}>

            <div className="input-icon-wrap">
              <input
                type="text"
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="Digite a cidade aqui..."
                required
              />
              <Icon icon={bookmarkIcon} />
            </div>

            <button>Pesquisar</button>
          </form>
        </header>

        {data && (
          <main>
            <h1>{city}</h1>

            <section className="current-weather">
              <img
                src={
                  'http://openweathermap.org/img/wn/' +
                  data.weather[0]['icon'] +
                  '.png'
                }
              ></img>
              <p>Temperatura: {parseInt(data.main.temp)} °C</p>
              <p>Descrição: {data.weather[0]['description']}</p>
              <p>Chuva: {data.clouds.all} %</p>
              <p>Umidade: {data.main.humidity} %</p>
              <p>Pressão: {data.main.pressure} hPa</p>
              <p>Vento: {data.wind['deg']} °</p>
              <p>Velocidade do Vento: {data.wind['speed']} m/s</p>
            </section>
          </main>
        )}
      </div>
    </div>
  )
}

export default App
