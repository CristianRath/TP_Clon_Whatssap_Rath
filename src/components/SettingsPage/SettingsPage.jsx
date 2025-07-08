import React from "react";
import { IoArrowBack } from "react-icons/io5";
import "./SettingsPage.css";

const SettingsPage = ({ contact, onBack }) => {
  return (
    <div className="settings-page">
      <div className="page-header">
        <button className="back-button" onClick={onBack} aria-label="Volver al chat">
          <IoArrowBack />
        </button>
        <img src={contact.avatar} alt={contact.name} />
        <h2>{contact.name}</h2>
      </div>

      <ul className="settings-list">
        <li className="settings-item">
          <span className="icon">📞</span>
          <div>
            <strong>Teléfono</strong>
            <small>{contact.phone}</small>
          </div>
        </li>
        <li className="settings-item">
          <span className="icon">🖼️</span>
          <div>
            <strong>Foto de perfil</strong>
            <small>Pública para tus contactos</small>
          </div>
        </li>
        <li className="settings-item">
          <span className="icon">🌙</span>
          <div>
            <strong>Tema</strong>
            <small>Claro</small>
          </div>
        </li>
        <li className="settings-item">
          <span className="icon">🔒</span>
          <div>
            <strong>Privacidad</strong>
            <small>Leer confirmaciones activadas</small>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SettingsPage;
