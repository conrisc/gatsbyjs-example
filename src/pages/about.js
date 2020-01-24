import React from 'react';
import { Link } from 'gatsby';
import styles from './about.module.scss';

export default () => {
    return <div className={styles.content}>
        <h3 className={styles.colDefault}>It's never about me!</h3>
        <Link to="/">Home</Link>
    </div>
};