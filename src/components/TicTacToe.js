import React, { useState } from 'react';
import EndGame from './EndGame';
import Square from './Square';
import styles from "../styles/TicTacToe.module.css";


const X_PLAYER = "X";
const O_PLAYER = "O";

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



const TicTacToe = () => {

    const [grid, setGrid] = useState(Array(9).fill(""));
    const [player, setPlayer] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const [draw, setDraw] = useState(false);
    const [winCount, setwinCount] = useState({ X: 0, O: 0 });

    const isGameOver = () => {
        if (!gameFinished) {
            // X win check
            for (let i = 0; i < 8; i++) {
                if (
                    grid[winCombinations[i][0]] === X_PLAYER &&
                    grid[winCombinations[i][1]] === X_PLAYER &&
                    grid[winCombinations[i][2]] === X_PLAYER
                ) {
                    setGameFinished(true);
                    setwinCount({ ...winCount, X: winCount.X + 1 });
                    console.log("X is Won");
                    return;
                }
            }

            // O win check
            for (let i = 0; i < 8; i++) {
                if (
                    grid[winCombinations[i][0]] === O_PLAYER &&
                    grid[winCombinations[i][1]] === O_PLAYER &&
                    grid[winCombinations[i][2]] === O_PLAYER
                ) {
                    setGameFinished(true);
                    setwinCount({ ...winCount, O: winCount.O + 1 });
                    console.log("O is Won");
                    return;
                }
            }

            // Draw game check
            if (!grid.includes("")) {
                setDraw(true);
                setGameFinished(true);
                console.log("D R A W");
            }
        }
    }

    isGameOver();


    const clickHandler = (id) => {
        setGrid(grid.map((item, index) => {
            if (index === id) {
                if (player) {
                    return X_PLAYER;
                } else {
                    return O_PLAYER;
                }
            } else {
                return item;
            }
        }));
        setPlayer(!player);
    }



    const restart = () => {
        setGrid(Array(9).fill(""));
        setGameFinished(false);
        setDraw(false);
    }


    function clearHistory() {
        setwinCount({ X: 0, O: 0 });
        restart();
    }

    return (
        <div>
            <h1 className={styles.title}>Tic - Tac - Toe</h1>
            <span className={styles.winHistoryX}>X's Wins: {winCount.X} </span>

            <span className={styles.winHistoryO}>O's Wins: {winCount.O} </span>

            {gameFinished && (
                <EndGame
                    winCount={winCount}
                    restart={restart}
                    player={player}
                    draw={draw}
                    clearHistory={clearHistory}
                />
            )}
            <Square clickedArray={grid} clickHandler={clickHandler} />
        </div>
    );
};

export default TicTacToe;