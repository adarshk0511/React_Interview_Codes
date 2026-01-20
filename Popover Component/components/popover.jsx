import { useEffect, useRef, useState } from "react";

const Popover = ({ children, content, position = "bottom" }) => {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setVisible(false);
    }
  };

  const handleClickOutside = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    if (!visible) return;

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  return (
    <div className="popover-wrapper" ref={wrapperRef}>
      <div onClick={() => setVisible((prev) => !prev)}>{children}</div>

      {visible && (
        <div className={`popover popover-${position}`}>{content}</div>
      )}
    </div>
  );
};

export default Popover;
