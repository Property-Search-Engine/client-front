import React from 'react';

import './Search.sass';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: '47',
      location: 'Vancouver, CA',

      fixtures: {
        placeholder: 'Search...',
        icon: 'fas fa-search',
      },
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <div className="search">
        <img src="/assets/images/search_buildings.svg"></img>

        <div>
          <input
            onChange={this.handleOnChange}
            placeholder={this.state.fixtures.placeholder}
            value={this.state.query}
          ></input>

          <i className={this.state.fixtures.icon}></i>
        </div>

        <p className="results">
          <span className="num">{this.state.results} Results</span> in{' '}
          {this.state.location}
        </p>
      </div>
    );
  }
}
