import React, { Component } from "react";

export default class SearchResults extends Component {
  render() {
    return (
      <>
        <ul>{this.props.onSearch}</ul>
      </>
    );
  }
}
