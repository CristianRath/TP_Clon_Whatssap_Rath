import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChatContext } from "../../context/ChatContext";
import { contacts } from "../../data/contacts";
import "./ContactList.css";

const ContactList = () => {
  const { chats } = useContext(ChatContext);

  return (
    <ul className="contact-list">
      {contacts.map(contact => {
        const mensajes = chats[contact.id] || [];
        const ultimo = mensajes[mensajes.length - 1];

        return (
          <li key={contact.id}>
            <Link to={`/chat/${contact.id}`} className="contact-item">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="contact-avatar"
              />
              <div className="contact-text">
                <div className="contact-main-line">
                  <strong className="contact-name">{contact.name}</strong>
                  <span className="contact-time">{ultimo?.time || "--:--"}</span>
                </div>
                <div className="contact-sub-line">
                  <span className="contact-status">✓✓</span>
                  <p className="contact-message">{ultimo?.text || "Sin mensajes"}</p>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
