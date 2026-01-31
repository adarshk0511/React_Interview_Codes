import { useEffect } from "react";

function useClickOutside(ref, handler) {
  useEffect(() => {
    const handleMouseDown = (event) => {
      if (!ref.current) return;

      if (!ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [ref, handler]);
}

export default useClickOutside;
