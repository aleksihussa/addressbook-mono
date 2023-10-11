import React from "react";
import "./App.css";
import { ContactProps, ContactWithCoordinates } from "./components/Table/types";
import { Map, Settings, Login, Home } from "./pages";
import { Route, Routes } from "react-router-dom";
import { getCoordinates } from "./services/locationServices";

const App = () => {
  const [contacts, setContacts] = React.useState<ContactProps[]>([]);

  const [contactsWithCoordinates, setContactsWithCoordinates] = React.useState<
    ContactWithCoordinates[]
  >([]);

  React.useEffect(() => {
    contacts.forEach(async (contact) => {
      if (contactsWithCoordinates.find((c) => c.name === contact.name)) return;

      const coordinates = await getCoordinates(contact.address);
      const firstCoordinates = coordinates[0];

      const newContact: ContactWithCoordinates = {
        ...contact,
        coordinates: firstCoordinates,
      };
      setContactsWithCoordinates((prevContacts) => [
        ...prevContacts,
        newContact,
      ]);
    });
  }, [contacts, contactsWithCoordinates, setContactsWithCoordinates]);

  React.useEffect(() => {
    contactsWithCoordinates.forEach((contact) => {
      if (!contacts.some((c) => c.name === contact.name))
        setContactsWithCoordinates((prevContacts) =>
          prevContacts.filter((c) => c.name !== contact.name)
        );
    });
  }, [contacts]);
  return (
    <Routes>
      <Route
        path="/"
        element={<Home contacts={contacts} setContacts={setContacts} />}
      />
      <Route
        path="/map"
        element={
          <Map
            contactsWithCoordinates={contactsWithCoordinates}
            setcontactsWithCoordinates={setContactsWithCoordinates}
          />
        }
      />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
