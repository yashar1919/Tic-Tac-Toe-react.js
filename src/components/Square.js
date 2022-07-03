import React from 'react';
import styles from "../styles/Square.module.css";

const Square = (props) => {
    return (
        <div className={styles.board}>
            {props.clickedArray.map((item, index) => {
                if (item === "") {
                    return (
                        <div
                            key={index}
                            className={styles.square}
                            onClick={() => props.clickHandler(index)}
                        >
                            {item}
                        </div>
                    );
                } else {
                    return <div key={index} className={styles.square}>{item}</div>
                }
            })}
        </div>
    );
};

export default Square;