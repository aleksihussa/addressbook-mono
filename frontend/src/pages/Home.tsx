import ContactTable from "../components/Table/ContactTable";
import { TopToolbar } from "../components/TopToolbar";
import "../App.css";
import React from "react";
import { ContactProps } from "../components/Table/types";
import { Helmet } from "react-helmet";

export const Home = ({
  contacts,
  setContacts,
}: {
  contacts: ContactProps[];
  setContacts: (contacts: ContactProps[]) => void;
}) => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div className="App">
      <TopToolbar />
      <div className="content">
        <ContactTable contacts={contacts} setContacts={setContacts} />
      </div>
    </div>
  </>
);
