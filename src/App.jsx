import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null),
    [search, setSearch] = useState(''),
    [city, setCity] = useState('');


  async function handleGetWeather(event) {
    event.preventDefault()

    const response = await axios.get(
      'http://api.openweathermap.org/data/2.5/weather?q=' +
      search +
        ',br&units=metric&appid=94330ca3439ac3ac99ddbdd0e800e8fb&mode=json&lang=pt_br'
    )

    setData(response.data)
    setCity(response.data.name)

    console.log(response.data)
  }

  return (
    <div className="container">
      <div className="app">
        <header>
          <h1>🌥️ Clima Brasil</h1>
          <code>Aplicação React Js</code>
          <code>v1.2</code>

          <p id="info">Pesquise abaixo:</p>
          <form onSubmit={handleGetWeather}>
            <input
              type="text"
              value={search}
              onChange={event => setSearch(event.target.value)}
              placeholder="Digite a cidade aqui..."
            />
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
              <p>Temperatura: {data.main.temp} °C</p>
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
