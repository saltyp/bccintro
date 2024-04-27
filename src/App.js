import React from 'react';
import logo from './logo.svg';
import './App.css';
import pokemon from './pokemon.json';
import PropTypes from 'prop-types';


const PokemonRow = ({pokemon, onSelect}) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <button onClick={() => onSelect(pokemon)}>Select</button>
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


function App() {
  const [filter, setFilter] = React.useState("");
  const [selectedItem, selectedItemSet] = React.useState(null);
  return (
    <div
      style = {{
        margin: 'auto',
        width: 800,
        paddingTop: "lrem"
      }}>
      <h1 className='title' >Pokemon Search</h1>
      <div
        style={{
          display:"grid",
          gridTemplateColumns:"70% 30%",
          gridColumnGap: "1rem",
        }}
      >
        <div> 
        <input 
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
      </div>
    </div>
  );
}

export default App;
