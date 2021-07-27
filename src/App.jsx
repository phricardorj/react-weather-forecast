import React, { useState } from 'react'
import './App.css'
import { api } from './services/api'
import { FaTemperatureHigh, FaWind } from 'react-icons/fa'

function App() {
  
  const 
   [weather, setWeather] = useState(null),
   [city, setCity] = useState(''),
   [search, setSearch] = useState('');

  async function handleGetWeather(event) {
    event.preventDefault();

    const response = await api.get(search)
    setCity(search)
    setWeather(response.data)
  }

  return (
    <div className="App">
      <header>
        <h1>🌥️ Clima ReactJS</h1>
        <p id="info">Pesquise pelo nome da cidade</p>
        <form onSubmit={handleGetWeather}>
          <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
          <button >Search</button>
        </form>
      </header>

      {weather &&
        <main>

          <h1>{city}</h1>

          <section className='current-weather'>
            <h2>Current weather</h2>

            <p>{weather.temperature}</p>
            <p>{weather.description}</p>

          </section>

          <section className='forecast'>
            <h2>Forecast</h2>
            <ol>
              {
                weather.forecast.map(day =>
                  <li>
                    <div>
                      <FaTemperatureHigh />
                      <p>{day.temperature}</p>
                    </div>

                    <div>
                      <FaWind />
                      <p>{day.wind}</p>
                    </div>
                  </li>
                )
              }
            </ol>
          </section>
        </main>
      }
    </div>
  )
}

export default App
