import React from "react";

const SortToolbar = ({ onSort }) => {
  return (
    <div className="sort-toolbar">
      <button onClick={() => onSort("total")}>Twubric Score</button>
      <button onClick={() => onSort("friends")}>Friends</button>
      <button onClick={() => onSort("influence")}>Influence</button>
      <button onClick={() => onSort("chirpiness")}>Chirpy</button>
    </div>
  );
};

export default SortToolbar;
