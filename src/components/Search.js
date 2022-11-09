import React from "react";
import { GlobalContext } from "../context/GlobalContext";

const Search = () => {
  const global = React.useContext(GlobalContext);
  const [button, setButton] = React.useState("Pesquisar");
  const [error, setError] = React.useState(null);
  const inputElement = React.useRef();

  const getApiData = async () => {
    let json;
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${global.searchInput},br&units=metric&appid=${process.env.REACT_APP_API_KEY}&mode=json&lang=pt_br`
    );
    json = await data.json();
    global.setResponse(json);
    global.updateHistory(json.name);
    setButton("Pesquisar");
  };

  return (
    <>
      <label style={{ marginBottom: "1rem" }}>
        Digite a cidade ou estado de sua preferência:
      </label>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (global.searchInput === "") {
            inputElement.current.focus();
            setError("Preencha o campo");
            return null;
          }
          setButton("Carregando");
          getApiData();
        }}
      >
        <input
          type="text"
          value={global.searchInput}
          onChange={({ target }) => {
            if (target.value === "") {
              inputElement.current.focus();
              setError("Preencha o campo");
            } else {
              setError(null);
            }
            global.setSearchInput(target.value);
          }}
          ref={inputElement}
          placeholder="Bahia ou Salvador"
        ></input>
        {error && <p style={{ color: "red" }}>* {error}</p>}
        <button style={{ marginTop: "1rem", width: "100%" }}>{button}</button>
      </form>
    </>
  );
};

export default Search;
