import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactSm from "./ContactSm";
import ContactExp from "./ContactExp";

export default function App() {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    async function getContacts() {
      const response = await fetch(
        "https://randomuser.me/api/?results=10&seed=foobar"
      );
      const data = await response.json();

      setContactList(
        data.results.map((item, index) => {
          return {
            key: nanoid(),
            id: item.login.uuid,
            fname: item.name.first,
            lname: item.name.last,
            title: item.name.title,
            email: item.email,
            mobile: item.cell,
            age: item.dob.age,
            thumbnail: item.picture.thumbnail,
            picture: item.picture.large,
            expanded: index === 0 ? true : false,
          };
        })
      );
    }
    getContacts();
  }, []);

  function expandContact(id) {
    console.log(`Clicked ${id}`);
  }

  const contacts = contactList.map((contact) => {
    return contact.expanded ? (
      <ContactExp key={contact.key} data={contact} />
    ) : (
      <ContactSm
        key={contact.key}
        data={contact}
        handleClick={() => expandContact(contact.id)}
      />
    );
  });

  return (
    <main>
      <div className="container">{contacts}</div>
    </main>
  );
}
