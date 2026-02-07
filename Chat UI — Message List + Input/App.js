import { useEffect, useState } from "react";
import { initialMessages } from "./data/initialMessages";
import "./styles.css";

export default function App() {
  const [messages, setMessages] = useState(initialMessages);
  const [value, setValue] = useState("");
  const [lastId, setLastId] = useState(9);

  const sendMessage = () => {
    if (!value.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: lastId,
        text: value,
        sender: "user",
        timestamp: Date.now(),
      },
    ]);

    setValue("");
    setLastId((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h1>Chat UI — Message List + Input</h1>
      <div className="chat-container">
        <div className="list">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-row ${msg.sender}`}>
              <div className="chat-bubble">{msg.text}</div>
            </div>
          ))}
        </div>

        <div className="input-div">
          <input
            className="input-field"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className="input-btn" onClick={sendMessage}>
            ✔️
          </button>
        </div>
      </div>
    </div>
  );
}
