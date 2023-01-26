import React, { useContext } from 'react';
import { CategoryContext } from '../App';

const CategoryDetails = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h1>This is category details </h1>
            <h2>Slected category {category}</h2>
        </div>
    );
};

export default CategoryDetails;