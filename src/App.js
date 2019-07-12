import React from "react";
import Header from "./components/header";
import Headline from "./components/headline"

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="A Post" desc="Click a button to post something"/>
      </section>
    </div>
  );
}

export default App;
