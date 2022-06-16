import React, { useState } from "react";

export default function ContactExp(props) {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact__expanded">
      <img
        className="contact__image__expanded expanded__margin"
        src={props.data.picture}
        alt={`${props.data.fname} ${props.data.lname}`}
      />
      <div className="contact__name__expanded expanded__margin">
        <span className="firstName__expanded">{props.data.fname}</span>
        <span className="lastName_expanded">{props.data.lname}</span>
      </div>
      <div className="contact__info expanded__margin">
        <span className="title">Title: {props.data.title}</span>
        <span className="age" onClick={() => setShowAge((prevAge) => !prevAge)}>
          Age: {showAge ? props.data.age : "hidden"}{" "}
        </span>
      </div>
      <span className="expanded__margin">
        Email: <span className="contact__email"> {props.data.email}</span>
      </span>
      <span className="conact__phone expanded__margin">
        Mobile: {props.data.mobile}
      </span>
    </div>
  );
}
