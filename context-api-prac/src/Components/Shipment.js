import React, { useContext } from 'react';
import { CategoryContext } from '../App';
const Shipment = () => {
    const [category, setCount] = useContext(CategoryContext);
    return (
        <div>
            <h1>This is Shipment : {category}</h1>
            <button onClick={() => setCount(category + 1)}>+=</button>
        </div>
    );
};

export default Shipment;