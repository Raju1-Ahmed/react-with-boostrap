import logo from './logo.svg';
import './App.css';
import { Button, Spinner, Spinner as spinner } from 'react-bootstrap';
import CardGroup from './components/CardGroup/Cardgroup';

function App() {
  return (
    <div className="App">
      <h2>Using bootstrap</h2>
      <Button variant='primary'>Button</Button>
    <br/>
    <br/>
    <br/>
      {/* <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner> */}
      <CardGroup></CardGroup>

    </div>
  );
}

export default App;
