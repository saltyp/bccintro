import React from "react";
// import { Input } from "@mui/material";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  font-size: large;
  padding: 0.2rem;
`;

const PokemonFilter = ({filter, setFilter}) => (
    <Input 
    type="text"
    value = {filter}
    onChange = {(evt) => setFilter(evt.target.value)}
    />
)

export default PokemonFilter;