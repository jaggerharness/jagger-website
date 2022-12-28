import React, { Suspense, useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
const PokemonCard = React.lazy(() => import("../components/PokemonCard.js"));

const PokemonPage = (props) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const pokemon_url = "http://localhost:8080/fetchAllPokemon";

    const fetchPokemon = async () => {
      try {
        const response = await fetch(pokemon_url);
        await response.json().then((element) => setPokemon(element.data));
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
        <div className="flex justify-center flex-wrap bg-[url('../public/images/ws-pokemon.jpeg')] content-evenly mx-2 mt-2 mb-8 border-4 rounded border-ws-dark-gray">
          <Suspense
            fallback={
              <span className="animate-pulse text-white">Loading...</span>
            }
          >
            {pokemon ? (
              pokemon.map((entry) => {
                return <PokemonCard key={entry.id} data={entry} />;
              })
            ) : (
              <div
                className={`${
                  pokemon
                    ? "underline decoration-dotted underline-offset-4"
                    : "animate-pulse text-gray-300"
                }`}
              >
                Loading...
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};
export default PokemonPage;
