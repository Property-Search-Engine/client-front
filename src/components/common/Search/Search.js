import { debounce } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchProperties } from "../../../redux/properties/properties-actions";
import ROUTES from "../../../utils/routes";

import "./Search.sass";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results:
        this.props.propertiesData.properties.length > 0 &&
        this.props.propertiesData.properties.length * 50,
      location: "Amazings homes waiting for you",

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
    this.handleSearch(value);
  }

  handleSearch = debounce((value) => {
    this.props.fetchProperties(this.props.propertiesData.filters, {
      city: value,
    });
    console.log(this.props);
    this.props.history.push("results/" + value);
  }, 1000);

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
          <span className="num">{this.state.results} </span> in{" "}
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

export default withRouter(connect(mapStateToProps, mapDispathToProps)(Search));
