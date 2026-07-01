import React, { useState, useEffect } from "react";


export default function Greeting() {
  const [currentTime, setCurrentTime] = useState(new Date());//useState
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();

    if (hour >= 5 && hour < 12) return "Good Morning! ☀️";
    if (hour >= 12 && hour < 17) return "Good Afternoon! 🌤️";
    if (hour >= 17 && hour < 21) return "Good Evening! 🌆";

    return "Good Night! 🌙✨";
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <button
        className="toggle-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <div className="modal-content">
        <h1 data-testid="greeting">{getGreeting()}</h1>

        <div
          data-testid="time"
          className="updated-time"
        >
          {currentTime.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
