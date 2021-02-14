import React, { useState } from "react";
import { makeBooking } from "../../../utils/oneComponentFetchers";
import { useParams, useHistory } from "react-router-dom";
import { finalEndpoints } from "../../../utils/endpoints";
import { connect } from "react-redux";

import "./BookingForm.sass";

function BookingForm(props) {
  const { userState } = props;
  const history = useHistory();

  const [name, setname] = useState("");
  const [message, setmessage] = useState("");
  const [phone, setphone] = useState("");
  const { id } = useParams();

  function handleBooking(e) {
    e.preventDefault();

    if (name !== "" && message !== "" && phone !== "") {
      makeBooking(id, { name, message }, finalEndpoints.makeBooking);
      if (userState.isAuthenticated) {
        history.push("/");
      }
    }
  }

  return (
    <div className="app">
      <div className="BookingForm">
        <p>Get in touch with the advertiser</p>

        <form onSubmit={handleBooking}>
          <div className="field">
            <div className="title">
              <i className="fas fa-user"></i>
              <p>Name</p>
            </div>
            <input
              value={name}
              placeholder="John Doe"
              onChange={(e) => setname(e.target.value)}
            ></input>
          </div>

          <div className="field">
            <div className="title">
              <i className="fas fa-user"></i>
              <p>Phone Number</p>
            </div>
            <input
              value={phone}
              placeholder="Add your telephone here"
              onChange={(e) => setphone(e.target.value)}
            ></input>
          </div>

          <div className="field">
            <div className="title">
              <i className="fas fa-comment-alt"></i>
              <p>Message</p>
            </div>
            <textarea
              value={message}
              placeholder="Write your message here..."
              onChange={(e) => setmessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};

export default connect(mapStateToProps, null)(BookingForm);
