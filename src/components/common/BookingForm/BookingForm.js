import React from "react";

import "./BookingForm.sass";

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="BookingForm">
        <p>Get in touch with the advertiser</p>

        <form>
          <div className="field">
            <div className="title">
              <i class="fas fa-comment-alt"></i>
              <p>Message</p>
            </div>
            <textarea placeholder="Write your message here..."></textarea>
          </div>

          <div className="field">
            <div className="title">
              <i class="fas fa-user"></i>
              <p>Name</p>
            </div>
            <input placeholder="John Doe"></input>
          </div>

          <button>Send Message</button>
        </form>
      </div>
    );
  }
}
