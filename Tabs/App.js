import { useState } from "react";
import { tabs } from "./data/tabs";
import "./styles.css";

export default function App() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeComponent = tabs[activeIdx];
  return (
    <div className="App">
      <h1>Tabs</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {/* Tabs List */}
        <div style={{ border: "1px solid" }}>
          <h2 style={{ borderBottom: "1px solid" }}>Tabs</h2>
          <div>
            {tabs.map((tab, idx) => {
              return (
                <p
                  key={tab.id}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    margin: "5px",
                    border: "1px solid",
                    borderRadius: "5px",
                    backgroundColor: `${idx === activeIdx ? "gray" : "white"}`,
                  }}
                >
                  {tab.label}
                </p>
              );
            })}
          </div>
        </div>

        {/* Active Tab */}
        <div style={{ border: "1px solid" }}>
          <h2 style={{ borderBottom: "1px solid" }}>Active Tab</h2>
          <h5>{activeComponent.label}</h5>
          <p>{activeComponent.content}</p>
        </div>
      </div>
    </div>
  );
}
