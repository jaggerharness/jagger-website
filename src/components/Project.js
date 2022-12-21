import React from "react";

const Project = (props) => {
  return (
    <div className="flex p-2 mx-auto md:ml-2 md:mr-auto mt-5 w-11/12 md:w-2/3 xl:w-1/2 rounded-xl bg-gradient-to-br from-ws-dark-green via-ws-green to-ws-lime-green hover:from-ws-lime-green hover:via-ws-green hover:to-ws-dark-green">
      <a
        href={`/projects${props.data.project_link}`}
        className="rounded-xl bg-ws-light-gray border-ws-dark-gray border-2"
      >
        <div className="p-4 flex flex-col justify-between leading-normal">
          <div className="pb-2">
            <div className="text-white font-bold text-2xl mb-2 underline underline-offset-8">
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
