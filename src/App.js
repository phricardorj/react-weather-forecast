import React from "react";
import { GlobalStorage } from "./context/GlobalContext";
import Header from "./components/Header";
import Search from "./components/Search";
import History from "./components/History";
import Response from "./components/Response";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <GlobalStorage>
        <Search />
        <History />
        <Response />
      </GlobalStorage>
      <Footer />
    </>
  );
};

export default App;
