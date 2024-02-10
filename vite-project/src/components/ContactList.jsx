// ContactList.jsx
import React from 'react';
import ContactRow from './ContactRow';

const ContactList = ({ contacts, setSelectedContactId }) => {
  // ... (rest of your component)

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <ContactRow
            key={contact.id}
            contact={contact}
            onClick={() => setSelectedContactId(contact.id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
