import React, { PureComponent } from "react";

export default class SearchBar extends PureComponent {
  render() {
    const name = this.props.searchTermName || undefined;
    return (
      <div className="search-box">
        <input
          name={name}
          className="search-input"
          id="search"
          type="text"
          placeholder="Search"
          value={this.props.input}
          onChange={this.props.onInputChange}
          onKeyPress={this.props.onKeyPress || null}
        />
      </div>
    );
  }
}
