import React from 'react'
import Form from './Form'

import 'bootstrap/dist/css/bootstrap.min.css'
// git project https://github.com/erikflowers/weather-icons
import 'weather-icons/css/weather-icons.css'

function Viewer() {
  return (
    <>
      <header>
        <h1>⛅ Pesquise seu clima!</h1>
        <code>Desenvolvido por @phricardorj</code>
      </header>
      <main>
        <div className="container">
          <Form />
        </div>
      </main>
    </>
  )
}

export default Viewer
