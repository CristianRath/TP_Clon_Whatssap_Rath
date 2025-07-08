import React from "react";
import ContactList from "../components/ContactList/ContactList";
import "./Home.css";

const Home = () => (
  <div className="home">
    <div className="home-inner">
      <div className="home-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Logo"
          className="whatsapp-logo"
        />
        <h1>WhatsApp Clon</h1>
      </div>
      <ContactList />
    </div>
  </div>
);

export default Home;
