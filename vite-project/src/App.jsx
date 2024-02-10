// App.jsx
import React, { useState } from 'react';
import ContactList from './components/ContactList';
// Import your selected contact component here, once it's created

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        // Render the selected contact view here
        <div>Selected Contact View</div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}
