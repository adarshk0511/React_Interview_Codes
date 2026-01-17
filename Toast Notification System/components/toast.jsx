import { useState, useEffect, useRef } from "react";
import { toastSamples } from "../data/toastData";
import ToastItem from "./toastItem";

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  //Fix for useEffect running twice during initialisation
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    toastSamples.forEach((toast) => addToast(toast));
  }, []);

  const addToast = (toast) => {
    setToasts((prev) => [...prev, toast]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onClose={removeToast} />
      ))}
    </div>
  );
};

export default Toast;
