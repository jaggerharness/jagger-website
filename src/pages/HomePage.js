import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {

  return (
    <div className="flex flex-col min-h-screen bg-ws-background bg-fixed">
      <div className="flex flex-col justify-center min-h-screen align-center items-center">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-ws-dark-green via-ws-green to-ws-lime-green text-transparent bg-clip-text font-mono">
          Hello, world!
        </h1>
        <div className="text-5xl text-white align-middle text-center pb-5 w-fit font-bold font-mono hover:transition-all">
          I'm Jagger Harness
        </div>
        <Link
          to="/about-me"
          className="transition-all duration-700 bg-gradient-to-tl from-ws-lime-green via-ws-green to-ws-dark-green bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold py-2 px-4 rounded"
        >
          About Me
        </Link>
        <Link
          to="/projects"
          className="transition-all duration-700 bg-gradient-to-tl from-ws-lime-green via-ws-green to-ws-dark-green bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold py-2 px-4 mt-4 rounded"
        >
          Projects Playground
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
