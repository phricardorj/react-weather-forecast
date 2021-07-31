import React from 'react'
import Form from './components/Form'

function App() {
  return (
    <>
      <header>
        <div className="container">
          <h1>🌥️ Clima Brasil</h1>
          <code>Aplicação React Js</code>
          <code id="version">v1.1</code>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="app">
            <Form />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
