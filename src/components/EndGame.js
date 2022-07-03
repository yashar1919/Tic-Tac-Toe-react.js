import React from 'react';
import styles from "../styles/EndGame.module.css";



const EndGame = (props) => {
    return (
        <div className={styles.endGameScreen}>
            {!props.draw && <span className={styles.winText}>{props.player ? "O is Won😎" : "X is Won😎"}</span>}
            {props.draw && <span className={styles.winText}>Draw Game</span>}

            <span className={styles.winHistory}>
                X's Wins: {props.winCount.X}
                <br />
                O's Wins: {props.winCount.O}
            </span>

            <button className={styles.btn} onClick={props.restart}>
                RESTART GAME
            </button>
            <button className={styles.btn} onClick={props.clearHistory}>
                CLEAR HISTORY
            </button>
        </div>
    );
};

export default EndGame;