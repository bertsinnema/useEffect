import { useState, useEffect } from "react";

export default function ProgressBar({ totalTime }) {
  const [remainingTime, setRemainingTime] = useState(totalTime);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, []);

  return <progress value={remainingTime} max={totalTime} />;
}
