import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [connection, setConnection] = useState("Failed");

  useEffect(() => {
    const url = "http://localhost:9000/connection";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setConnection(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-col min-h-screen align-middle justify-center items-center bg-ws-background bg-fixed">
        <div className="text-xl font-bold text-white font-mono">
          Connection to API:
          <span className={connection === 'Success' ? "text-ws-lime-green" : "text-red-600"} > {connection}</span>
        </div>
        <h1 className="text-4xl text-center font-bold text-ws-green font-mono">
          Hello, world!
        </h1>
        <div className="text-5xl text-white align-middle pb-5 w-fit font-bold font-mono hover:animate-pulse">
          I'm Jagger Harness
        </div>
        <div>
          <button
            onClick={() => setCount(count + 1, console.log(count))}
            class="bg-ws-green hover:bg-ws-lime-green text-white font-bold py-2 px-4 rounded"
          >
            Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
