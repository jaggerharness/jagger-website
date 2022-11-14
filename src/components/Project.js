import React from "react";

const Project = () => {
  return (
    <div className="flex flex-row bg-gradient-to-r from-ws-lime-green to-blue-400 hover:from-pink-500 hover:to-yellow-500 rounded-xl w-3/4 h-max ml-5">
      <div className="p-16 border-ws-light-gray text-black border-r-4 w-3/4">
        Project <br></br>
        Image <br></br>
        Here <br></br>
      </div>
      <div className="ml-auto my-auto pr-8 pl-5 text-left justify-center rounded text-ws-dark-gray items-center align-middle">
        Project Description Here: the description should probably be a few sentences of text detailing the project. 
        Looks like we may have room to wrap about three lines worth of text based on the size of the box, 
        but we may increase the height and decrease the width. Here is some more placeholder text. It probably would
        have been better if I would have used lorum epsom here. Oh well. At least the text is here. Here is some more placeholder text.
        Here is some more placeholder text. Here is some more placeholder text. Here is some more placeholder text. Here is some more placeholder text.
      </div>
    </div>
  );
};
export default Project;
