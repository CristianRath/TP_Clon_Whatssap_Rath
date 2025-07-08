/* import React, { useContext, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";
import { contacts } from "../data/contacts";
import MessageBubble from "../components/MessageBubble/MessageBubble";
import MessageInput from "../components/MessageInput/MessageInput";
import ContactHeader from "../components/ContactHeader/ContactHeader";
import { IoArrowBack } from "react-icons/io5";
import "./Chat.css";

const Chat = () => {
  const { id } = useParams();
  const contactId = parseInt(id, 10);
  const { chats } = useContext(ChatContext);
  const messages = chats[contactId] || [];
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const contact = contacts.find(c => c.id === contactId) || {
    name: `Contacto ${contactId}`,
    avatar: `https://i.pravatar.cc/150?img=${contactId + 10}`
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="page-header">
        <button
          className="back-button"
          onClick={() => navigate("/")}
          aria-label="Volver al inicio"
        >
          <IoArrowBack />
        </button>
        <ContactHeader contact={contact} />
      </div>

      <div className="chat-history">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            message={msg}
            isSender={msg.sender === "me"}
          />
        ))}
        <div ref={scrollRef} />
      </div>

      <MessageInput contactId={contactId} />
    </div>
  );
};

export default Chat;
 */
import React, { useContext, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";
import { contacts } from "../data/contacts";
import MessageBubble from "../components/MessageBubble/MessageBubble";
import MessageInput from "../components/MessageInput/MessageInput";
import ContactHeader from "../components/ContactHeader/ContactHeader";
import { IoArrowBack } from "react-icons/io5";
import "./Chat.css";

const Chat = () => {
  const { id } = useParams();
  const contactId = parseInt(id, 10);
  const { chats } = useContext(ChatContext);
  const messages = chats[contactId] || [];
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const contact = contacts.find(c => c.id === contactId) || {
    name: `Contacto ${contactId}`,
    avatar: `https://i.pravatar.cc/150?img=${contactId + 10}`
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="app-container">
      <div className="page-header">
        <button
          className="back-button"
          onClick={() => navigate("/")}
          aria-label="Volver al inicio"
        >
          <IoArrowBack />
        </button>
        <ContactHeader contact={contact} />
      </div>

      <div className="chat-history">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            message={msg}
            isSender={msg.sender === "me"}
          />
        ))}
        <div ref={scrollRef} />
      </div>

      <MessageInput contactId={contactId} />
    </div>
  );
};

export default Chat;
