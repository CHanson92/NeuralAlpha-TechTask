import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default class searchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  onSearch = (input, actors, films) => {
    if (input === actors) {
      const indexes = actors.map((actor, i) => actor === input ? i : -1)
      .filter(index => index !== -1);
      return (
        <p>{films.map((film, i) => film.indexOf(indexes.toString()))}</p>
      )
    }
  };
  render() {
    const { input } = this.state;
    const actors = this.props.data
      .map(actor => actor.starring.value)
      .map(el => el.replace("http://dbpedia.org/resource/", ""));
    const films = this.props.data
      .map(film => film.f.value)
      .map(el => el.replace("http://dbpedia.org/resource/", ""));
    return (
      <>
        <SearchBar onInputChange={this.onInputChange} input={input} />
        <SearchResults {...this.onSearch}/>
      </>
    );
  }
}
