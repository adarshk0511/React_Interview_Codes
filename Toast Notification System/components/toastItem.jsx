import { useEffect } from "react";

const ToastItem = ({ key, toast, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(toast.id);
    }, toast.duration || 3000);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, onClose]);
  return (
    <div className={`toast ${toast.type}`}>
      <span>{toast.message}</span>
      <button onClick={() => onClose(toast.id)}>❌</button>
    </div>
  );
};
export default ToastItem;
