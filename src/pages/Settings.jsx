import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { contacts } from "../data/contacts";
import SettingsPage from "../components/SettingsPage/SettingsPage";

const Settings = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contactId = parseInt(id, 10);

  const contact = contacts.find(c => c.id === contactId) || {
    id: contactId,
    name: `Contacto ${id}`,
    avatar: `https://i.pravatar.cc/150?img=${contactId + 10}`
  };


  const volverAlChat = () => navigate(`/chat/${contact.id}`);

  return <SettingsPage contact={contact} onBack={volverAlChat} />;
};

export default Settings;
