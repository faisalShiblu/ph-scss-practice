import React, { useContext } from 'react';
import Categoty from './Categoty';
import { CategoryContext } from '../App';

const Home = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h1>This is home {category}</h1>
            <Categoty ></Categoty>
        </div>
    );
};

export default Home;