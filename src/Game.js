import React, { useState } from 'react';
import Square from './Square';
import './Style.css';

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (squares[index] || winner) return;

        const newSquares = squares.slice();
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);
        checkWinner(newSquares);
    };

    const checkWinner = (squares) => {
        for (let pattern of winningPatterns) {
            const [a, b, c] = pattern;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a]);
                return;
            }
        }
    };

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    };

    return (
        <div className='container'>
            <div>
                <div className="status">
                    {winner ? `Congratulations, Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`}
                </div>
                <div className="board">
                    {squares.map((value, index) => (
                        <Square key={index} value={value} onClick={() => handleClick(index)} />
                    ))}
                </div>
                {winner && <button onClick={resetGame}>New Game</button>}
            </div>
        </div>
    );
};

export default Game;
