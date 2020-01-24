import React from 'react';

import Styles from './Header.module.scss';

export function Header(props) {
    return (
        <div className={Styles.content}>
            <h1 className={Styles.title}>Gatsby Example</h1>
        </div>
    );
}
