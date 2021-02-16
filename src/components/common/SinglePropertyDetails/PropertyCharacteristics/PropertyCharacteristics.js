import React from "react";

import { Image } from "react-bootstrap";

import "./PropertyCharacteristics.scss";

export default function PropertyCharacteristics(props) {
  const { beds, baths, m2 } = props;

  return (
    <div className="characteristics w-100 d-flex flex-row">
      <Image className="icon" src="/assets/icons/bed.svg" />
      <span>{beds}</span>
      <Image className="icon" src="/assets/icons/bath.svg" />
      <span>{baths}</span>
      <Image className="icon" src="/assets/icons/m2.svg" />
      <span>{m2}</span>
    </div>
  );
}
