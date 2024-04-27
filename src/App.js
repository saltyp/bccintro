import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const PokemonRow = ({pokemon, onSelect}) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <Button 
        variant="contained"
        color="primary"
        onClick={() => onSelect(pokemon)}
      >
        Select
      </Button>
    </td>
  </tr>
);

// minimum set of properties for a component
// DEPRECATED in favor of TypeScript
PokemonRow.propTypes = {
  pokemon: PropTypes.shape({  // shape is used to specify the object structure,
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
  onSelect: PropTypes.func, 
};

const PokemonInfo = ({name, base}) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      {Object.keys(base).map((key) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{base[key]}</td>
        </tr>
      ))}
    </table>
  </div>
);  

// styled componenets: OBS semicolons used, hypenated instead of camelCase, no quotations
const Title = styled.h1`
  text-align: center;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 10rem;
`;
const Input = styled.input`
  width: 100%;
  font-size: large;
  padding: 0.2rem;
`;
const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {
  const [filter, setFilter] = React.useState("");
  const [pokemon, setPokemon] = React.useState([]);
  const [selectedItem, selectedItemSet] = React.useState(null);

  React.useEffect(() => { // useEffect is used to fetch data from the server  
    fetch("http://localhost:3000/bccintro/pokemon.json")
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, []);
  return (
    <Container>
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div> 
        <Input 
        value = {filter}
        onChange = {(evt) => setFilter(evt.target.value)}
        />
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
              .slice(0,20).map((pokemon) => (
              <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon)=>selectedItemSet(pokemon)}/>
            ))}
          </tbody>
        </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem}/>}
      </TwoColumnLayout>
    </Container>
  );
}

export default App;
