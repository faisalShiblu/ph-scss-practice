import React from 'react';
import Categoty from './Categoty';

const Home = (props) => {
    return (
        <div>
            <h1>This is home {props.count}</h1>
            <Categoty count={props.count}></Categoty>
        </div>
    );
};

export default Home;