import React, { Component } from "react";
import axios from "axios";
import SearchContainer from "./components/SearchContainer";
import "./App.scss";
const API_URL = 'http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=PREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2F%3E%0D%0APREFIX+dbpedia2%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fproperty%2F%3E%0D%0APREFIX+dbpedia%3A+%3Chttp%3A%2F%2Fdbpedia.org%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0ASELECT+%3Ff+%3Fstarring%0D%0AWHERE+%7B%0D%0A%3Ff+rdf%3Atype+dbo%3AFilm+.%0D%0A%3Ff+dbo%3Astarring+%3Fstarring%0D%0A%7D&output=json'

class App extends Component {
  state = {
    films: []
  }
  componentDidMount() {
    axios.get(API_URL)
    .then(response => response.data)
    .then((data) => {
      this.setState({ films: data })
     })
  };
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
