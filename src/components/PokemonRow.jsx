import React from "react"; 
import PropTypes from 'prop-types';
import Button from "@mui/material/Button";
import PokemonType from '../PokemonType';

const PokemonRow = ({pokemon, onSelect}) => (
  <tr key={pokemon.id}>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <Button 
        variant="contained"
        color="primary"
        onClick={() => onSelect(pokemon)}
      >
        More Info
      </Button>
    </td>
  </tr>
);

// minimum set of properties for a component
// DEPRECATED in favor of TypeScript
PokemonRow.propTypes = {
  pokemon: PropTypes.arrayOf(PokemonType),
  };

export default PokemonRow;