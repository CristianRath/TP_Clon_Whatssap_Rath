import React from "react";
import { Link } from "react-router-dom";
import "./ContactHeader.css";

const ContactHeader = ({ contact }) => {
  return (
    <div className="contact-header">
      <Link to={`/settings/${contact.id}`} className="contact-link">
        <img src={contact.avatar} alt={contact.name} className="avatar" />
        <h3 className="contact-name">{contact.name}</h3>
      </Link>
    </div>
  );
};

export default ContactHeader;

