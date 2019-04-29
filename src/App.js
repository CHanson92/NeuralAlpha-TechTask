import React, { Component } from "react";
import SearchContainer from "./components/SearchContainer";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Search below to see what films your favourite actor has been in!
          </h1>
        </header>
        <section className="Search-Container">
          <SearchContainer />
        </section>
      </div>
    );
  }
}

export default App;
