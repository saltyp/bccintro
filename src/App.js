import React from 'react';
import styled from "@emotion/styled";

// import PokemonRow from './components/PokemonRow';
import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';

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
        <PokemonFilter 
            filter={filter} 
            setFilter={setFilter}
        />
        <PokemonTable
          pokemon={pokemon}
          filter = {filter}
          selectedItemSet={selectedItemSet}
        />
        </div>
        {selectedItem && <PokemonInfo {...selectedItem}/>}
      </TwoColumnLayout>
    </Container>
  );
}

export default App;
