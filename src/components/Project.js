import React from "react";

const Project = (props) => {
  return (
    <a
      href={`/projects${props.data.project_link}`}
      className="px-5 ml-2 flex mr-auto mt-5 p-2 w-1/2 rounded-xl bg-gradient-to-br from-ws-green to-blue-500 hover:from-ws-lime-green hover:to-blue-400"
    >
      <div className="p-4 flex flex-col justify-between leading-normal">
        <div className="pb-2">
          <div className="text-gray-900 font-bold text-2xl mb-2">
            {props.data.project_title}
          </div>
          <p className="text-gray-700 text-base">
            {props.data.project_description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Project;
