import logo from './logo.svg';
import './App.css';

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
      </table>
    </div>
  );
}

export default App;
