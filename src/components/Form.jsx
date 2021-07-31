import React, { useState } from 'react'
import Response from './Response'
import { api } from '../services/api'
import { Icon } from '@iconify/react'
import bookmarkIcon from '@iconify-icons/bi/bookmark'
import bookmarkFill from '@iconify-icons/bi/bookmark-fill'

function Form() {
  const [data, setData] = useState(null),
    [search, setSearch] = useState(''),
    [city, setCity] = useState(''),
    [iconFav, setIconFav] = useState(false),
    [favData, setFavData] = useState([
      'rio de janeiro',
      'curitiba',
      'salvador'
    ]),
    [IconView, setIconView] = useState(false),
    [apiStatus, setStatusApi] = useState(false)

  async function handleGetWeather(event) {
    event.preventDefault()

    document.querySelector('button').innerText = 'Carregando...'

    const response = await api.get(
      'weather?q=' +
        search +
        ',br&units=metric&appid=94330ca3439ac3ac99ddbdd0e800e8fb&mode=json&lang=pt_br'
    )

    document.querySelector('button').innerText = 'Pesquisar'

    setData(response.data)
    setCity(response.data.name)
    setIconView(response.status != 200 ? false : true)
    setStatusApi(response.status != 200 ? false : true)
  }

  function favCity(a) {
    let b = a.toLocaleLowerCase(),
      c = b.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
      d = c.replace(/( )+/g, ' ')

    function changeIcon(flag) {
      flag ? setIconFav(true) : setIconFav(false)
    }

    favData.indexOf(d) != -1 ? changeIcon(true) : changeIcon(false)
  }

  return (
    <>
      <p id="info">🔎 Pesquise abaixo:</p>
      <form onSubmit={handleGetWeather}>
        <div className="input-icon-wrap">
          <input
            type="text"
            value={search}
            onChange={function (event) {
              setSearch(event.target.value)
              favCity(event.target.value)
              event.target.value != '' && apiStatus == 200
                ? setIconView(true)
                : setIconView(false)
            }}
            placeholder="Digite a cidade aqui..."
            required
          />
          {IconView && <Icon icon={iconFav ? bookmarkFill : bookmarkIcon} />}
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

      {data && <Response data={data} city={city} />}
    </>
  )
}

export default Form
