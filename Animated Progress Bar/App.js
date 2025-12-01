import { useEffect, useState } from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const [aniProgress, setAniProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAniProgress(progress), 100);
  }, [progress]);

  // width is not used for the animation as it is not optimal for that , it has to repaint the width again n again
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${progress}%`,
          transform: `translateX(${aniProgress - 100}%)`,
          color: aniProgress < 5 ? "black" : "white",
        }}
        //accessability
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {progress}%
      </div>
    </div>
  );
};
export default function App() {
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar progress={40} />
    </div>
  );
}
