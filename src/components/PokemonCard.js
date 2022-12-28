import React from "react";

//In progress - Needs attention
const PokemonCard = (props) => {
  return (
    <div className="w-11/12 md:w-3/12 h-44 relative rounded-lg m-2 scrollbar-hide shadow-lg bg-gray-400 hover:animate-shake">
      <img
        className="mx-auto py-2"
        src={props.data.image_path ? props.data.image_path : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"}
        alt={formatName(props.data.name)}
      />
      <div className="px-6 py-3 absolute bottom-0 w-full rounded-b-lg bg-white">
        <div className="font-bold text-xl text-center">{`#${
          props.data.pokemon_id
        } ${formatName(props.data.name)}`}</div>
        {/* Will be Pokemon description */}
        {/* <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p> */}
      </div>
      {/* Will be Pokemon type */}
      {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div> */}
    </div>
  );
};

export default PokemonCard;

function formatName(params) {
  //Capitalize first letter and remove any text appended to the name by a "-"
  return params.charAt(0).toUpperCase() + params.slice(1).split("-")[0];
}
