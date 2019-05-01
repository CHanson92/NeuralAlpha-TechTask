import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default class searchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.onSearch.bind(this);
  }
  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  onSearch = () => {
    const actors = this.props.data
      .map(actor => actor.starring.value)
      .map(el => el.replace("http://dbpedia.org/resource/", ""))
      .filter(actor => actor);
    const films = this.props.data
      .map(film => film.f.value)
      .map(el => el.replace("http://dbpedia.org/resource/", ""))
      .filter(film => film);
    const actorIndex = actors
      .map((actor, i) => (actor === this.state.input ? i : -1))
      .filter(index => index !== -1);
    if (actors.includes(this.state.input)) {
      let filmTitles = actorIndex.map(item => (
        <li key={item}>{films[item]}</li>
      ));
      return filmTitles;
    }
  };

  render() {
    const { input } = this.state;
    return (
      <>
        <SearchBar onInputChange={this.onInputChange} input={input} />
        <SearchResults onSearch={this.onSearch()} />
      </>
    );
  }
}
