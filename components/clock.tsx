import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function Clock() {
  const [time, setTime] = useState("");

  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    setTime(`${hours}:${minutes}:${seconds}`);
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    updateTime(); // Initialize immediately
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <Button className="text-lg py-4 px-6  hover:bg-gray-800 dark:hover:text-white text-white dark:text-black rounded-full">
        {time}
      </Button>
    </div>
  );
}
