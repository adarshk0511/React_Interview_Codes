import { useEffect, useState } from "react";
import useThrottle from "./hooks/use-throttle";
import "./styles.css";

export default function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const throttleHandleResize = useThrottle(handleResize, 500);

  useEffect(() => {
    window.addEventListener("resize", throttleHandleResize);

    return () => {
      window.removeEventListener("resize", throttleHandleResize);
    };
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>
        Window Size: {windowSize.height} x {windowSize.width}
      </h2>
    </div>
  );
}
