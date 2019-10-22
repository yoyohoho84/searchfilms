import React, {Component} from 'react';
import styles from "./HomePage.module.css";
import FilmSearchContainer from "../../containers/FilmSearchContainer";

export default () => {
    return (
        <div className={styles.main}>
            <FilmSearchContainer/>
        </div>
    )
}
