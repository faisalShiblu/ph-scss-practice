import React from 'react';
import CategoryDetails from './CategoryDetails';

const Categoty = (props) => {
    return (
        <div>
            <h1>This is category</h1>
            <CategoryDetails count={props.count}></CategoryDetails>
        </div>
    );
};

export default Categoty;