import React from "react";

export default function ContactExp() {
  return (
    <div className="contact__expanded">
      <img
        className="contact__image__expanded expanded__margin"
        src="https://randomuser.me/api/portraits/women/62.jpg"
        alt="person"
      />
      <div className="contact__name__expanded expanded__margin">
        <span className="firstName__expanded">Britney</span>
        <span className="lastName_expanded">Sims</span>
      </div>
      <div className="contact__info expanded__margin">
        <span className="title">Title: Miss</span>
        <span className="age">Age: 33</span>
      </div>
      <span className="contact__email expanded__margin">
        Email: britney.sims@example.com
      </span>
      <span className="conact__phone expanded__margin">
        Mobile: 081-136-4597
      </span>
    </div>
  );
}
