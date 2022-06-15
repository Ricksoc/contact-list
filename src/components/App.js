import React from "react";
import ContactSm from "./ContactSm";
import ContactExp from "./ContactExp";

export default function App() {
  return (
    <main>
      <div className="container">
        <ContactExp />
        <ContactSm />
        <ContactSm />
        <ContactSm />
        <ContactSm />
        <ContactSm />
      </div>
    </main>
  );
}
