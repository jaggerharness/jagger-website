import React from "react";

//In progress - Needs attention
const PokemonCard = (props) => {
  return (
    <div className="w-11/12 md:w-2/12 relative h-36 rounded-lg m-2 scrollbar-hide shadow-lg bg-ws-dark-gray pb-8">
      <div className="flex justify-center">
        <img
          className="w-4/12 h-4/12 object-cover"
          src={props.data.image_path}
          alt={
            props.data.name.charAt(0).toUpperCase() +
            props.data.name.slice(1).split("-")[0]
          }
        ></img>
      </div>
      <div className="flex items-center absolute bottom-0 justify-center rounded-b-lg pt-auto px-2 font-bold text-xl text-center w-full h-10 bg-gradient-to-br from-ws-dark-green via-ws-green to-ws-lime-green hover:from-ws-lime-green hover:via-ws-green hover:to-ws-dark-green">{`#${
        props.data.pokemon_id
      } ${
        props.data.name.charAt(0).toUpperCase() +
        props.data.name.slice(1).split("-")[0]
      }`}</div>
    </div>
  );
};

export default PokemonCard;
