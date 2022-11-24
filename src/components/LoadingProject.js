import React from "react";

const LoadingProject = (props) => {
  return (
    <div>
      <div className="h-36 rounded-xl mt-5 ml-2 w-1/2 bg-ws-light-gray animate-pulse">
        <div className="flex ml-5 animate-pulse flex-row items-center h-full">
          <div className="w-28 bg-gray-300 h-28 rounded-xl" />
          <div className="p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-400 mt-8 bg-gray-400 w-56 rounded font-bold text-xl mb-2">
                Title
              </div>
              <p className="text-gray-300 bg-gray-300 w-96 rounded"></p>
              <p className="text-gray-300 bg-gray-300 w-96 mt-1 rounded">Desc</p>
              <p className="text-gray-300 bg-gray-300 w-96 mt-1 rounded">Desc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoadingProject;
