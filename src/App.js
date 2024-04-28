import React from 'react';
import styled from "@emotion/styled";

// import PokemonRow from './components/PokemonRow';
import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';


const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "SET_POKEMON":
      return { ...state, pokemon: action.payload };
    case "SET_SELECTED_ITEM":
      return { ...state, selectedItem: action.payload };
    default:
      throw new Error("No action");
  }
};

// styled componenets: OBS semicolons used, hypenated instead of camelCase, no quotations
const Title = styled.h1`
  text-align: center;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 10rem;
`;
const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {
  // const [filter, setFilter] = React.useState("");
  // const [pokemon, setPokemon] = React.useState([]);
  // const [selectedItem, selectedItemSet] = React.useState(null);
  const [state, dispatch] = React.useReducer(pokemonReducer, {
    filter: "",
    pokemon: [],
    selectedItem: null,
  });

  React.useEffect(() => { // useEffect is used to fetch data from the server  
    fetch("http://localhost:3000/bccintro/pokemon.json")
      .then(res => res.json())
      .then(data => 
        dispatch({
          type: "SET_POKEMON", // type is used to identify the action
          payload: data,
      })
    );
  }, []);
  
  if (!state.pokemon) {
    return <div>Loading...</div>;
}  

  return (
    <PokemonContext.Provider 
      value={{
        state, 
        dispatch
      }}
    >
        <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div> 
          <PokemonFilter />
          <PokemonTable/>
          </div>
          <PokemonInfo/>}
        </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
  );
}

export default App;
