import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {

  return (
    <div className="flex flex-col min-h-screen bg-ws-background bg-fixed">
      <div className="flex flex-col justify-center min-h-screen align-center items-center">
        <h1 className="text-4xl font-bold text-ws-green font-mono">
          Hello, world!
        </h1>
        <div className="text-5xl text-white align-middle pb-5 w-fit font-bold font-mono hover:animate-pulse">
          I'm Jagger Harness
        </div>
        <Link
          to="/about-me"
          className="bg-ws-green hover:bg-ws-lime-green hover:ring-0 ring-1 ring-ws-green text-white font-bold py-2 px-4 rounded"
        >
          About Me
        </Link>
        <Link
          to="/projects"
          className="bg-ws-green hover:bg-ws-lime-green hover:ring-0 ring-1 ring-ws-green text-white font-bold py-2 px-4 mt-4 rounded"
        >
          Projects Playground
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
