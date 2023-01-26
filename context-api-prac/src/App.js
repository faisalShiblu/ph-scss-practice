import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Shipment from './Components/Shipment';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header count={count} setCount={setCount} />
      <Home count={count} />
      <Shipment />
    </div>
  );
}

export default App;
