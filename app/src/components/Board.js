import React from 'react';
import Square from './Square';

const Board = ({ board, handleSquareClick }) => {
    console.log(board);
    return (
        <div className="board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((square, colIndex) => (
                        <Square
                            key={colIndex}
                            piece={square.piece}
                            onClick={() => handleSquareClick(rowIndex, colIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;