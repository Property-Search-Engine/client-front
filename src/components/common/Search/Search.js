import { debounce } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { fetchProperties } from "../../../redux/properties/properties-actions";

import "./Search.sass";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: "47",
      location: "Vancouver, CA",

      fixtures: {
        placeholder: "Search...",
        icon: "fas fa-search",
      },
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const { value } = e.target;
    this.setState({ query: value });
    if (!value) return;
    this.handleSearch(value);
  }

  handleSearch = debounce((value) => {
    this.props.fetchProperties(this.props.propertiesData.filters, {
      city: value,
    });
  }, 500);

  render() {
    return (
      <div className="search">
        <img
          alt=""
          aria-hidden={true}
          src="/assets/images/search_buildings.svg"
        ></img>

        <div>
          <input
            onChange={this.handleOnChange}
            placeholder={this.state.fixtures.placeholder}
            value={this.state.query}
          ></input>

          <i className={this.state.fixtures.icon}></i>
        </div>

        <p className="results">
          <span className="num">{this.state.results} Results</span> in{" "}
          {this.state.location}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    propertiesData: state.propertiesState,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    fetchProperties: (filters, isSearchbar) =>
      dispatch(fetchProperties(filters, isSearchbar)),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Search);
