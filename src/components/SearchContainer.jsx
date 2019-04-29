import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default class searchContainer extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <SearchResults />
      </>
    );
  }
}
