import React from "react";

const FeedCard = (props) => {
  return (
    <div className="flex m-2 w-1/4 rounded-xl bg-gray-200">
      <div className="p-4 flex flex-col justify-between leading-normal">
        <div className="pb-2">
          <div className="text-gray-900 font-bold text-2xl mb-2">
            {`${props.data.character} - ${props.data.title}`}
          </div>
          <p className="text-gray-700 text-base">
            {props.data.quote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
