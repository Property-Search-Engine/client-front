import React from "react";

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
      <div className="Bookings">
        <div className="titles">
          <p>#</p>
          <p>PROPERTY</p>
          <p>STATUS</p>
        </div>
        {this.state.bookings.map((booking) => {
          return (
            <div className="booking">
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
