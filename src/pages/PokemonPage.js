import React, { Suspense, useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
const FeedCard = React.lazy(() => import("../components/FeedCard.js"));

const PokemonPage = (props) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const pokemon_url = "https://pokeapi.co/api/v2/pokemon";

    const fetchPokemon = async () => {
      try {
        const response = await fetch(pokemon_url);
        const data = await response.json().then(element => setPokemon(element.results));
        // setPokemon(data.results);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-ws-background bg-fixed">
      <NavigationBar />
      <div className="flex flex-col min-h-screen">
        <div className="text-4xl mx-auto md:ml-0 md:mr-auto text-white md:pl-2 pt-2 w-fit font-bold font-mono">
          Pokémon List
        </div>
        <div className="flex justify-center py-5 flex-wrap">
          <Suspense fallback={<span className="animate-pulse text-white">Loading...</span>}>
            {pokemon
              ? pokemon.map((entry) => {
                  return <div className="text-gray-200 w-screen ml-2">{`entry.name: ${entry.name}`}</div>;
                })
              : ""}
          </Suspense>
        </div>
      </div>
    </div>
  );
};
export default PokemonPage;
