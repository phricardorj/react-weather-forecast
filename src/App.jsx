import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'

import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'

ReactDOM.render(
  <React.StrictMode>
    <header>
      <h1>⛅ Pesquise seu clima!</h1>
      <code>Desenvolvido por @phricardorj</code>
    </header>
    <main>
      <div className="container">
        <Form />
      </div>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
)
