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
      <Link
        to="/"
        className={`${
          window.location.pathname === "/" ? "underline" : ""
        } text-xl font-bold text-white font-mono basis-1/3 text-center md:ml-2 md:basis-0 hover:underline underline-offset-4 decoration-ws-lime-green`}
      >
        Home
      </Link>
      <Link
        to="/about-me"
        className={`${
          window.location.pathname === "/about-me" ? "underline" : ""
        } text-xl font-bold text-white font-mono basis-1/3 text-center md:whitespace-nowrap mr-4 md:ml-10 md:mr-0 md:basis-0 hover:underline underline-offset-4 decoration-ws-lime-green`}
      >
        About Me
      </Link>
      <Link
        to="/projects"
        className={`${
          window.location.pathname === "/projects" ? "underline" : ""
        } text-xl font-bold text-white font-mono basis-1/3 text-center md:ml-10 md:basis-0 hover:underline underline-offset-4 decoration-ws-lime-green`}
      >
        Projects
      </Link>
    </div>
  );
};

export default NavigationBar;
