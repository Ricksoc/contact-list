import React, { useRef } from "react";

export default function ContactSm(props) {
  const contactRef = useRef();
  return (
    <div
      ref={contactRef}
      className="contact__small"
      onClick={() => props.handleClick(props.data.id, contactRef)}
    >
      <img
        className="contact__image__small"
        src={props.data.thumbnail}
        alt={`${props.data.fname} ${props.data.lname}`}
      />
      <span className="firstName__small">{props.data.fname}</span>
      <span className="lastName__small">{props.data.lname}</span>
      <span className="phone__small">{props.data.mobile}</span>
    </div>
  );
}
