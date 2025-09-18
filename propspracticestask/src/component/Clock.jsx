import { useEffect, useState } from "react";

const Clock = ({ color }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <>
      <h1>Clock</h1>
      <div className="div">
        <h1
          style={{
            color: color,
            backgroundColor: "black",
            width: "200px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "2px",
          }}
        >
          {time}
        </h1>
      </div>
    </>
  );
};

export default Clock;
