import React from "react";

//In progress - Needs attention
const PokemonCard = (props) => {
  return (
    <div className="w-11/12 md:w-1/4 h-60 rounded-lg m-2 overflow-scroll scrollbar-hide shadow-lg bg-ws-dark-gray pb-8">
      <div className="flex items-center justify-center px-2 font-bold text-xl mb-2 text-center h-20 bg-gradient-to-br from-ws-dark-green via-ws-green to-ws-lime-green hover:from-ws-lime-green hover:via-ws-green hover:to-ws-dark-green w-full">{`#${props.data.pokemon_id} ${props.data.name.charAt(0).toUpperCase() + props.data.name.slice(1).split("-")[0]}`}</div>
      <img className="mx-auto hover:animate-bounce" src={props.data.image_path} alt={props.data.name.charAt(0).toUpperCase() + props.data.name.slice(1).split("-")[0]}></img>
    </div>
  );
};

export default PokemonCard;
