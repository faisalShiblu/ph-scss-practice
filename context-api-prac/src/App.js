import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Shipment from './Components/Shipment';

export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <CategoryContext.Provider value={[count, setCount]}>
      <Header />
      <Home />
      <Shipment />
    </CategoryContext.Provider >
  );
}

export default App;
