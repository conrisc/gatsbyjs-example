import React from 'react';

import Styles from './Title.module.scss';

export function Title({ children }) {
    return (
        <h3 className={Styles.title}>{children}</h3>
    );
}
