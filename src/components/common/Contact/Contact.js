import React from "react";
import { Image } from "react-bootstrap";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="d-flex flex-row contact justify-content-center">
      <Image className="icon" src="/assets/icons/phone-call.svg" />
      <span>Contact</span>
    </div>
  );
}
