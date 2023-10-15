import './App.css';

import React, { useState } from 'react';
import Board from './components/Board';
import {initializeChessboard, attemptMove } from './Logic';

function App() {
    const [board, setBoard] = useState(initializeChessboard());
    const [selected, setSelected] = useState(null);

    const handleSquareClick = (row, col) => { 
        // Implement logic to handle user moves here
        console.log('handlesquareclick not implemented ', row, col);
        if (document.querySelector('.selected')) {
            console.log('attempt move should be called...', attemptMove);
            setBoard(attemptMove(board, selected, { row: row, col: col }));
            document.querySelector('.selected').classList.remove('selected');
            console.log('move should have happened...');
            setSelected(null);
        } else {
            document.querySelector('.row:nth-child(' + (row + 1) + ') .square:nth-child(' + (col + 1) + ')').classList.add('selected');
            setSelected({ row: row, col: col });
        }
    };

    return (
        <div className="App">
            <h1>Chess Game</h1>
            <Board board={board} handleSquareClick={handleSquareClick} />
            <a href="https://www.flaticon.com/free-icons/pawn" title="pawn icons">Pawn icons created by Stockio - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/chess" title="chess icons">Rook icons created by deemakdaksina - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/chess" title="chess icons">Knight icons created by Freepik - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/bishop" title="bishop icons">Bishop icons created by Victoruler - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/crown" title="crown icons">Queen icons created by Stockio - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/crown" title="crown icons">King icons created by Ayub Irawan - Flaticon</a> 

            source: https://github.com/lathomas64/react-chess
        </div>
    );
}

export default App;