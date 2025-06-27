import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { ref, push, onValue } from "firebase/database";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = ref(db, "messages");

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const msgArray = data ? Object.values(data) : [];
      setMessages(msgArray);
    });
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      push(messagesRef, { text: message, timestamp: Date.now() });
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <h2>💬 Firebase Chat</h2>
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className="chat-message">{msg.text}</div>
        ))}
      </div>
      <div className="chat-input">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
