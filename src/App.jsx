import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'
import './styles/App.css'

ReactDOM.render(
  <React.StrictMode>
    <header>
      <div>
        <h1>
          <i className="wi wi-cloud"></i> Pesquise seu clima!
        </h1>
        <code>App de Previsão de Tempo com React Js</code>
      </div>
    </header>
    <main>
      <div className="container">
        <Form />
      </div>
    </main>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
