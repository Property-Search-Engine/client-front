import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

import "./Bookings.sass";

export default class Bookings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookings: [
        {
          id: 1,
          address: "123 Calle del Revés",
          status: "pending",
        },
        {
          id: 2,
          address: "456 Calle del Pez",
          status: "pending",
        },
        {
          id: 3,
          address: "789 Calle del Muelle",
          status: "confirmed",
        },
      ],
    };
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
        {this.state.bookings.map((booking, i) => {
          return (
            <div key={"booking-" + i} className="booking">
              <p>{booking.id}</p>
              <p>{booking.address}</p>
              <p>{booking.status}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
