import React, { useContext } from 'react';
import { CategoryContext } from '../App';

const Header = (props) => {
    const [category, setCount] = useContext(CategoryContext);
    return (
        <div>
            <h1>This is header : {category}</h1>
            <button onClick={() => setCount('laptop')}>laptop</button>
            <button onClick={() => setCount('mobile')}>mobile</button>
            <button onClick={() => setCount('camera')}>camera</button>
        </div>
    );
};

export default Header; <h1>This is header</h1>