import React, { useContext } from "react";
import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";
import { type } from "@testing-library/user-event/dist/type";

const PokemonTable = () => {
    const {
        state: {pokemon, filter}, // destructuring the state object
        dispatch
    } = useContext(PokemonContext);
    
    return (
        <table width="100%">
        <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
        </tr>
        </thead>
        <tbody>
        {pokemon 
            .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
            .slice(0,20)
            .map((pokemon) => (
                <PokemonRow 
                    pokemon={pokemon} 
                    key={pokemon.id} 
                    onSelect={(pokemon)=>dispatch({
                        type: "SET_SELECTED_ITEM",
                        payload: pokemon,
                    })}
                />
        ))}
        </tbody>
    </table>
    );
};

export default PokemonTable;
