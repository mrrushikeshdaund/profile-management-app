import React, { useEffect } from "react";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // auto close after 3s

    return () => clearTimeout(timer);
  }, [onClose]);

  const baseStyle =
    "fixed top-5 right-5 px-4 py-3 rounded-lg shadow-lg text-white text-sm z-50 transition-opacity";

  const typeStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500",
  };

  return <div className={`${baseStyle} ${typeStyles[type]}`}>{message}</div>;
};

export default Toast;
