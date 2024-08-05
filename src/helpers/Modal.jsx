import { useState, useEffect, useRef } from "react";

export const Modal = ({ msg }) => {
  const [isVisible, setIsVisible] = useState(true);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, []);

  const handleMouseEnter = () => {
    clearTimer();
  };

  const handleMouseLeave = () => {
    startTimer();
  };

  return (
    <>
      {isVisible && (
        <div
          className="bg-white py-4 px-10 absolute"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2>{msg}</h2>
        </div>
      )}
    </>
  );
};
