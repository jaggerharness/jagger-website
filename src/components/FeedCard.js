import React from "react";

const FeedCard = (props) => {
  return (
    <div className="w-11/12 md:w-1/4 h-60 rounded-lg m-2 overflow-scroll scrollbar-hide shadow-lg bg-ws-dark-gray pb-8">
      <div className="flex items-center justify-center px-2 font-bold text-xl mb-2 text-center h-20 bg-gradient-to-br from-ws-dark-green via-ws-green to-ws-lime-green hover:from-ws-lime-green hover:via-ws-green hover:to-ws-dark-green w-full">{`${props.data.character} - ${props.data.title}`}</div>
      <p className="text-gray-200 text-center px-2 pb-2">{props.data.quote}</p>
    </div>
  );
};

export default FeedCard;
