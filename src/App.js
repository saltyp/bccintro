import logo from './logo.svg';
import './App.css';
import pokemon from './pokemon.json';


function App() {
  return (
    <div
      style = {{
        margin: 'auto',
        width: 800,
        paddingTop: "lrem"
      }}>
      <h1 className='title' >Pokemon Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.slice(0,20).map((p) => (
            <tr
              key={p.id}
            >
              <td>{p.name.english}</td>
              <td>{p.type.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
