import React, { useEffect, useState } from "react";

const HomePage = (props) => {
  const [count, setCount] = useState(0);
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
    <div className="flex flex-col min-h-screen bg-ws-background bg-fixed">
      <div className="text-xl font-bold text-white text-right font-mono pr-2 pt-2">
        {`Connection to API: `}
        <span
          className={
            connection === "Success" ? "text-ws-lime-green" : "text-red-600"
          }
        >
          {connection}
        </span>
      </div>
      <div className="flex flex-col justify-center min-h-screen align-center items-center">
        <h1 className="text-4xl font-bold text-ws-green font-mono">
          Hello, world!
        </h1>
        <div className="text-5xl text-white align-middle pb-5 w-fit font-bold font-mono hover:animate-pulse">
          I'm Jagger Harness
        </div>
        <div>
          <button
            onClick={() => setCount(count + 1, console.log(count))}
            className="bg-ws-green hover:bg-ws-lime-green text-white font-bold py-2 px-4 rounded"
          >
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
