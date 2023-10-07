// src/components/Square.js

import React from 'react';

const Square = ({ piece, onClick }) => {
    if (piece) {
        return <span onClick={onClick} className={piece.color + " square " + piece.name}>
            <img alt={piece.color + " " + piece.name} src={"assets/"+piece.name + "_" + piece.color + ".png"} width='100px' height='100px'></img>
        </span>;
    } else {
        return <span onClick={onClick} className="square">
            
        </span>;
    }
};

export default Square;