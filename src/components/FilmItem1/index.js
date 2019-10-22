import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from "./FilmItem.module.sass";


class FilmItem1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPicked: false
        };
        this.getPick = this.getPick.bind(this);
    }

    getPick = (e) => {
        e.preventDefault();
        this.setState({
            isPicked: true
        }, () => {
            this.props.handleClick(this.props.title)
        });
        console.log(this.props.id)
    };

    render() {

        return (
            <li key={this.props.id}
                className={styles.items}>
                <Link
                    to={`/film/${this.props.id}`}
                >
                    {this.props.title}
                </Link>
                <i className={styles.bookmarksPassive}
                   onClick={this.getPick}
                >
                </i>
            </li>
        )
    }
}

export default FilmItem1;