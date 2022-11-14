import React from "react";

const Project = (props) => {
  return (
    <div className="flex flex-row pt-5 bg-gradient-to-r from-ws-lime-green to-blue-400 hover:from-pink-500 hover:to-yellow-500 rounded-xl w-3/4 h-max ml-5">
      <div className="p-16 border-ws-light-gray text-black border-r-2 w-3/4">
        {props.project_name}
      </div>
      <div className="ml-auto my-auto pr-8 pl-5 text-left justify-center rounded text-ws-dark-gray items-center align-middle">
        {props.project_description}
      </div>
    </div>
  );
};
export default Project;
