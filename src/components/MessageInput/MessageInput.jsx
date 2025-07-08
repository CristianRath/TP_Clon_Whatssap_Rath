import React, { useState, useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import "./MessageInput.css";

const MessageInput = ({ contactId }) => {
  const { sendMessage } = useContext(ChatContext);
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (value.trim()) {
      sendMessage(contactId, value.trim());
      setValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="message-input-container">
      <input
        type="text"
        className="message-input"
        placeholder="Escribí un mensaje..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="send-button" onClick={handleSend}>Enviar</button>
    </div>
  );
};

export default MessageInput;
