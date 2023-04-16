import React, { useState } from "react";
import { useNavigate } from "react-router";

const ScreenA = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState("");

  const handleNavigate = () => {
    navigate("/screen_b", { state: { text: text, pokemon: pokemon } });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        value={pokemon}
        onChange={(e) => {
          setPokemon(e.target.value);
        }}
      />
      <button onClick={handleNavigate}>GO TO SCREEN B</button>
    </div>
  );
};

export default ScreenA;
