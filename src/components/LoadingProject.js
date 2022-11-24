import React from "react";

const LoadingProject = (props) => {
  return (
    <div>
      <div class="h-36 rounded-xl mt-5 ml-2 w-1/2 bg-ws-light-gray animate-pulse">
        <div class="flex ml-5 animate-pulse flex-row items-center h-full">
          <div class="w-28 bg-gray-300 h-28 rounded-xl" />
          <div class="p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <div class="text-gray-400 mt-8 bg-gray-400 w-56 rounded font-bold text-xl mb-2">
                Title
              </div>
              <p class="text-gray-300 bg-gray-300 w-96 rounded"></p>
              <p class="text-gray-300 bg-gray-300 w-96 mt-1 rounded">Desc</p>
              <p class="text-gray-300 bg-gray-300 w-96 mt-1 rounded">Desc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoadingProject;
