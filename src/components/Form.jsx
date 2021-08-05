import React, { useState } from 'react'
import Response from './Response'
import { api } from '../services/api'

function Form() {
  const [data, setData] = useState(null),
    [search, setSearch] = useState(''),
    [favData, setFavData] = useState(['rio de janeiro', 'curitiba', 'salvador'])

  async function handleGetWeather(event) {
    event.preventDefault()

    document.querySelector('button').innerText = 'Carregando...'

    const response = await api.get(
      'weather?q=' +
        search +
        ',br&units=metric&appid=baedc2f2f31b7b3303e5d42d88d283c3&mode=json&lang=pt_br'
    )

    document.querySelector('button').innerText = 'Pesquisar'

    setData(response.data)
  }

  return (
    <>
      <form onSubmit={handleGetWeather}>
        <div className="input-icon-wrap">
          <input
            type="text"
            value={search}
            onChange={function (event) {
              setSearch(event.target.value)
            }}
            placeholder="Digite a cidade aqui..."
            required
          />
        </div>

        <button>Pesquisar</button>
      </form>

      {favData && (
        <div className="fav-inline">
          {favData.map((city, index) => (
            <div className="fav-btn" key={index}>
              <span className="fav-txt">{city}</span>
            </div>
          ))}
        </div>
      )}

      {data && <Response data={data} />}
    </>
  )
}

export default Form
