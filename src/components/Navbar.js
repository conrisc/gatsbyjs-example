import React from 'react';
import { Link } from 'gatsby';

import Styles from './Navbar.module.scss';

export function Navbar(props) {
    return (
        <div className={Styles.content}>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </div>
    );
}
