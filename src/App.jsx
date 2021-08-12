import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

ReactDOM.render(
  <React.StrictMode>
    <header>
      <h1>⛅ Pesquise seu clima!</h1>
    </header>
    <main>
      <div className="container">
        <Form />
      </div>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
)
