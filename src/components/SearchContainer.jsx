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

  onSearch = (input) => {
    const actors = this.props.data
      .map(actor => actor.starring.value)
      .map(el => el.replace("http://dbpedia.org/resource/", ""));
    const films = this.props.data
      .map(film => film.f.value)
      .map(el => el.replace("http://dbpedia.org/resource/", ""));
    if (input === actors) {
      const indexes = actors
      .map((actor, i) => (actor === input ? i : -1))
      .filter(index => index !== -1);
      return (
        <p>
          {films.map((film, i) =>
            film.indexOf(
              indexes.forEach(function(number) {
                return number;
              })
            )
          )}
        </p>
      );
    } else {
      return <p>Error!</p>;
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
