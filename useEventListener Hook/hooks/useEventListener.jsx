import { useEffect, useRef } from "react";

function useEventListener(eventType, handler, element = window) {
  const handleRef = useRef(handler);

  useEffect(() => {
    handleRef.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!element?.addEventListener) return;

    const eventListner = (event) => {
      handleRef.current(event);
    };

    element.addEventListener(eventType, eventListner);

    return () => {
      element.removeEventListener(eventType, eventListner);
    };
  }, [eventType, element]);
}

export default useEventListener;
