import React, { useContext } from "react";
import "./MessageBubble.css";
import { ChatContext } from "../../context/ChatContext";
import { MdDelete } from "react-icons/md";

const MessageBubble = ({ message, isSender }) => {
  const bubbleClass = `bubble ${isSender ? "sender" : "receiver"}`;
  const { deleteMessage } = useContext(ChatContext);

  const handleDelete = () => {
    deleteMessage(message.contactId, message.id);
  };

  return (
    <div className={bubbleClass}>
      <p className="bubble-text">{message.text}</p>

      <div className="bubble-footer">
        <div className={`message-status ${message.status || ""}`}>
          <span className="message-time">{message.time}</span>


          {message.status && (
            <span className="check-icon">
              {message.status === "read" ? (
                <>
                  <svg className="check-svg first-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M1.5 13l2.1-2.1 5.4 5.4 9.3-9.3 2.1 2.1L9 20z" fill="#4fc3f7" />
                  </svg>
                  <svg className="check-svg second-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M3 14l2.1-2.1 5.4 5.4 9.3-9.3 2.1 2.1L10.5 21z" fill="#4fc3f7" />
                  </svg>
                </>
              ) : (
                <svg className="check-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M1.8 12.5l2.1-2.1 5.7 5.7L20 5.7l2.1 2.1-13.5 13.5z" fill="#aaa" />
                </svg>
              )}
            </span>
          )}


          <button
            className="delete-btn"
            onClick={handleDelete}
            title="Eliminar"
            aria-label="Eliminar mensaje"
          >
            <MdDelete size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
