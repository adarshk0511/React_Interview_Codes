import { useState } from "react";
import ProgressBar from "./components/progressBar";
import "./styles.css";

export default function App() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setProgress(0);
  };

  const startUpload = () => {
    if (!file) return;

    setIsUploading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="App">
      <h1>File Upload with Progress Bar</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={startUpload} disabled={!file || isUploading}>
        Upload
      </button>

      {isUploading && <ProgressBar progress={progress} />}
    </div>
  );
}
