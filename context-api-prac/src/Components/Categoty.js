import React, { useContext } from 'react';
import { CategoryContext } from '../App';
import CategoryDetails from './CategoryDetails';

const Categoty = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h1>This is category : {category}</h1>
            <CategoryDetails></CategoryDetails>
        </div>
    );
};

export default Categoty;