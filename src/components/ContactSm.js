import React from "react";

export default function ContactSm(props) {
  return (
    <div className="contact__small" onClick={props.handleClick}>
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
