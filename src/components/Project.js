import React from "react";

const Project = (props) => {
  return (
    <a
      href={`/projects${props.data.project_link}`}
      class="px-5 ml-2 flex mr-auto mt-5 p-2 w-1/2 rounded-xl bg-gradient-to-r from-ws-lime-green to-blue-500 hover:from-pink-500 hover:to-yellow-500"
    >
      <div class="p-4 flex flex-col justify-between leading-normal">
        <div class="pb-2">
          <div class="text-gray-900 font-bold text-2xl mb-2">
            {props.data.project_title}
          </div>
          <p class="text-gray-700 text-base">
            {props.data.project_description}
          </p>
        </div>
      </div>
    </a>
  );
};

// Original idea - keeping for comparing
// const Project = (props) => {
//   return (
//     <div className="pt-5 pl-2">
//       <div className="flex flex-row pt-5 bg-gradient-to-r from-ws-lime-green to-blue-400 hover:from-pink-500 hover:to-yellow-500 rounded-xl w-3/4 h-max ml-5">
//         <div className="p-16 border-ws-light-gray text-black border-r-2 w-3/4">
//           {props.data.project_title}
//         </div>
//         <div className="ml-auto my-auto pr-8 pl-5 text-left justify-center rounded text-ws-dark-gray items-center align-middle">
//           {props.data.project_description}
//         </div>
//       </div>
//     </div>
//   );
// };
export default Project;
