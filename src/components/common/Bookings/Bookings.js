import React from "react";
import { auth } from "../../../firebase/firebase";
import { finalEndpoints } from "../../../utils/endpoints";
import ROUTES from "../../../utils/routes";
import { authHeader } from "../../../utils/helpers";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

import "./Bookings.sass";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Bookings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookings: [
        {
          _id: 1,
          property: { address: "123 Calle del Revés" },
          status: "pending",
        },
        {
          _id: 2,
          property: { address: "456 Calle del Pez" },
          status: "pending",
        },
        {
          _id: 3,
          property: { address: "789 Calle del Muelle" },
          status: "confirmed",
        },
      ],
      bookingsFetched: [],
    };
  }
  async componentDidMount() {
    if (!this.props.userData.isAuthenticated) {
      this.props.history.push(ROUTES.LOGIN);
      return;
    }
    if (this.state.bookingsFetched.length < 1) {
      const bookingsFetched = await this.fetchBookings();
      this.setState({ ...this.state, bookingsFetched });
    }
  }
  async fetchBookings() {
    try {
      const userToken = await auth.currentUser.getIdToken();
      const AuthHeader = authHeader(userToken);
      const bookingsResponse = await fetch(finalEndpoints.getBookings, {
        headers: AuthHeader,
      });
      if (bookingsResponse.ok) {
        const bookings = await bookingsResponse.json();
        return bookings.data;
      }
      throw new Error("Falided fetch call /bookings/all");
    } catch (error) {
      throw new Error("Falided fetch call /bookings/all: " + error.message);
    }
  }
  render() {
    return (
      <div className="app Bookings">
        <HeaderComponent text={"Your bookings"} />
        <div className="titles">
          <p>#</p>
          <p>PROPERTY</p>
          <p>STATUS</p>
        </div>
        {this.state.bookingsFetched.map((booking, i) => {
          const { status, property } = booking;
          return (
            <div key={"booking-" + i} className="booking">
              <p>{i + 1}</p>
              <p>{property.address.street}</p>
              <p className={status}>
                {status}
                {status === "pending" && "..."}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state.userState,
  };
};

export default withRouter(connect(mapStateToProps, null)(Bookings));
