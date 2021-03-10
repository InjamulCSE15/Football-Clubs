import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

function App() {
  const buttonStyle = {
    color: 'white',
    backgroundColor: 'blue',
    height: '40px',
    borderRadius: '5px',
    margin: 'auto',
    padding: 'auto'
  }
  return (
    <div>
        <h1>This is font awesome</h1>
        <button style={buttonStyle}><FontAwesomeIcon icon={faCoffee} />Explore Here</button>
    </div>
  );
}

export default App;
