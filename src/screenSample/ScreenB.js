import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const ScreenB = () => {
  const location = useLocation();
  const text = location.state.text;
  const pokemon = location.state.pokemon;
  const [pokemonData, setPokemonData] = useState(null);
  const getPokemon = async () => {
    const poke = await axios({
      url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
      method: "GET",
    }).then((res) => {
      return res.data;
    });
    setPokemonData(poke);
  };
  const handleOnClick = () => {
    console.log(pokemonData);
  };
  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <div>
      <div>POKEMON</div>
      <button onClick={handleOnClick}>click</button>
      {pokemonData && (
        <>
          <div>{pokemonData.name}</div>
          <div>{pokemonData.weight}</div>
        </>
      )}
    </div>
  );
};

export default ScreenB;
