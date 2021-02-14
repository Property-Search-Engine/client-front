import React, {useState} from "react";
import {makeBooking} from '../../../utils/helpers'; 

import "./BookingForm.sass";

export default function BookingForm (props) {

  const [name, setname] = useState("")
  const [message, setmessage] = useState("")
  const [phone, setphone] = useState("")

  function handleSubmit (e) {
    e.preventDefault(); 

    if (name !== "" && message !== "" && phone !== "" ) {
      //send the booking form()
    }

  }

    return (
      <div className="BookingForm">
        <p>Get in touch with the advertiser</p>

        <form onSubmit={handleSubmit}>
  
          <div className="field">
            <div className="title">
              <i class="fas fa-user"></i>
              <p>Name</p>
            </div>
            <input value={name} placeholder="John Doe" onChange={(e) => setname(e.target.value)}></input>
          </div>

          <div className="field">
            <div className="title">
              <i class="fas fa-user"></i>
              <p>Phone Number</p>
            </div>
            <input value={phone} placeholder="645307574" onChange={(e) => setphone(e.target.value)}></input>
          </div>

          <div className="field">
            <div className="title">
              <i class="fas fa-comment-alt"></i>
              <p>Message</p>
            </div>
            <textarea value={message} placeholder="Write your message here..." onChange={(e) => setmessage(e.target.value)}></textarea>
          </div>

          <button>Send Message</button>
        </form>
      </div>
    );
}
