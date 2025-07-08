import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChatProvider } from "./context/ChatContext.jsx";

import Home from "./pages/Home.jsx";
import Chat from "./pages/Chat.jsx";
import Settings from "./pages/Settings.jsx";

import "./global.css";

const App = () => {
  return (
    <ChatProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/settings/:id" element={<Settings />} />
        </Routes>
      </Router>
    </ChatProvider>
  );
};

export default App;
