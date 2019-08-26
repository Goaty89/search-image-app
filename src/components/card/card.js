import React, { Component } from 'react';
import styles from './card.module.css';
import PropTypes from 'prop-types'

export default class Card extends Component {
    static defaultProps = {
        title: ''
    }
    static propsTypes = {
        title: PropTypes.string,
        children: PropTypes.any.isRequired
    }
 
    render() {
        return (
            <div>
                <label className={styles.title}>{this.props.title}</label>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}