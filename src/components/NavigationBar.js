import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [connection, setConnection] = useState("Failed");

  useEffect(() => {
    const url = "http://localhost:8080/connection";

    const checkAPIConnection = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setConnection(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    checkAPIConnection();
  }, []);

  return (
    <div className="flex flex-row bg-ws-light-gray p-2">
      <Link to="/" className="text-xl font-bold text-white font-mono pl-2">
        Home
      </Link>
      <Link
        to="/about-me"
        className="text-xl font-bold text-white font-mono pl-10"
      >
        About Me
      </Link>
      <Link
        to="/projects"
        className="text-xl font-bold text-white font-mono pl-10"
      >
        Playground
      </Link>
      <div className="text-xl font-bold text-white ml-auto font-mono pr-2">
        {`Connection to API: `}
        <span
          className={
            connection === "Success" ? "text-ws-lime-green" : "text-red-600"
          }
        >
          {connection}
        </span>
      </div>
    </div>
  );
};

export default NavigationBar;
