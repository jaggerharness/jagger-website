import React from "react";

const Project = (props) => {
  return (
    <div className="p-2 ml-2 flex mr-auto mt-5 w-1/2 rounded-xl bg-gradient-to-r from-ws-green to-ws-lime-green hover:from-ws-lime-green hover:to-ws-green">
    <a
      href={`/projects${props.data.project_link}`}
      className="rounded-xl bg-ws-light-gray border-ws-dark-gray border-2"
    >
      <div className="p-4 flex flex-col justify-between leading-normal">
        <div className="pb-2">
          <div className="text-white font-bold text-2xl mb-2">
            {props.data.project_title}
          </div>
          <p className="text-gray-100 text-base">
            {props.data.project_description}
          </p>
        </div>
      </div>
    </a>
    </div>
  );
};

export default Project;
