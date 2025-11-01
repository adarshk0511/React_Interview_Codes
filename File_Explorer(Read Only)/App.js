import { useState } from "react";
import "./styles.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  // console.log(explorerData);
  return (
    <div className="app">
      <Folder explorer={explorerData} />
    </div>
  );
}
