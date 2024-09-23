import { useEffect } from "react";
import { useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <h3>
      The current in Bharat is: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}{" "}
    </h3>
  );
};

export default CurrentTime;
