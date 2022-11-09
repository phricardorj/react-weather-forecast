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
      `https://api.openweathermap.org/data/2.5/weather?q=${global.searchInput},br&units=metric&appid=baedc2f2f31b7b3303e5d42d88d283c3&mode=json&lang=pt_br`
    );
    json = await data.json();
    global.setResponse(json);
    global.updateHistory(json.name);
    setButton("Pesquisar");
  };

  const handleBlur = ({ target }) => {
    if (target.value === "") {
      inputElement.current.focus();
      setError("Preencha o campo");
    }
    inputElement.current.blur();
    setError(null);
    return null;
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
          onChange={({ target }) => global.setSearchInput(target.value)}
          onBlur={handleBlur}
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
