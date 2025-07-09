import React, { createContext, useState } from "react";
import { contacts } from "../data/contacts";
import { getBotReply } from "../utils/BotResponse";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState(() => {
    return {
      [contacts[0].id]: [
        { id: 1, sender: "me", text: "¡Hola María! ¿Cómo estuvo tu día?", time: "10:00", status: "read", contactId: contacts[0].id },
        { id: 2, sender: "bot", text: "Tranquila, tomando mate y leyendo ☕📚", time: "10:01", contactId: contacts[0].id },
        { id: 3, sender: "me", text: "¡Qué envidia! Yo aún estoy trabajando 😩", time: "10:02", status: "read", contactId: contacts[0].id },
        { id: 4, sender: "bot", text: "Fuerza, ya falta poco para el finde 💪", time: "10:03", contactId: contacts[0].id },
        { id: 5, sender: "me", text: "¡Gracias! Me diste ánimo 😄", time: "10:04", status: "read", contactId: contacts[0].id }
      ],
      [contacts[1].id]: [
        { id: 6, sender: "bot", text: "¿El cliente aprobó la propuesta?", time: "09:40", contactId: contacts[1].id },
        { id: 7, sender: "me", text: "Sí, con algunos ajustes. Lo vemos más tarde", time: "09:41", status: "read", contactId: contacts[1].id },
        { id: 8, sender: "bot", text: "¿Puedo sumar lo de UX al informe final?", time: "09:42", contactId: contacts[1].id },
        { id: 9, sender: "me", text: "Sí, excelente. Que no falte eso ✅", time: "09:43", status: "read", contactId: contacts[1].id },
        { id: 10, sender: "bot", text: "¡Ok! Nos vemos a las 14", time: "09:44", contactId: contacts[1].id }
      ],
      [contacts[2].id]: [
        { id: 11, sender: "me", text: "¿Cómo estás, Lu? Te noté bajón ayer", time: "22:30", status: "read", contactId: contacts[2].id },
        { id: 12, sender: "bot", text: "Un poco mejor, gracias por escribir 🧡", time: "22:31", contactId: contacts[2].id },
        { id: 13, sender: "me", text: "Estoy para vos siempre, avisame si querés charlar", time: "22:32", status: "read", contactId: contacts[2].id },
        { id: 14, sender: "bot", text: "¿Mañana podés tomar un café?", time: "22:33", contactId: contacts[2].id },
        { id: 15, sender: "me", text: "Obvio. A las 17, como siempre ☕", time: "22:34", status: "read", contactId: contacts[2].id }
      ]
    };
  });

  const sendMessage = (contactId, text) => {
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });

    const userMessage = {
      id: Date.now(),
      text,
      time,
      sender: "me",
      status: "delivered",
      contactId
    };

    setChats(prev => ({
      ...prev,
      [contactId]: [...(prev[contactId] || []), userMessage]
    }));

    setTimeout(() => {
      setChats(prev => {
        const updated = [...(prev[contactId] || [])];
        const lastIndex = updated.findLastIndex(m => m.sender === "me");
        if (lastIndex !== -1) {
          updated[lastIndex] = { ...updated[lastIndex], status: "read" };
        }
        return { ...prev, [contactId]: updated };
      });
    }, 1200);

    setTimeout(() => {
      const botText = getBotReply(text);
      const botMessage = {
        id: Date.now() + 1,
        text: botText,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        }),
        sender: "bot",
        contactId
      };

      setChats(prev => ({
        ...prev,
        [contactId]: [...(prev[contactId] || []), botMessage]
      }));
    }, 1800);
  };

  const deleteMessage = (contactId, messageId) => {
    setChats((prev) => {
      const updated = { ...prev };

      updated[contactId] = updated[contactId]?.filter((msg) => msg.id !== messageId) || [];

      for (const [otherId, chat] of Object.entries(prev)) {
        if (Number(otherId) !== contactId) {
          const match = chat.find((msg) => msg.id === messageId);
          if (match) {
            updated[otherId] = chat.filter((msg) => msg.id !== messageId);
          }
        }
      }

      return updated;
    });
  };

  return (
    <ChatContext.Provider value={{ chats, sendMessage, deleteMessage }}>
      {children}
    </ChatContext.Provider>
  );
};


