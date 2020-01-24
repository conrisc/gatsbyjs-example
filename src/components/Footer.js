import React from 'react';

import Styles from './Footer.module.scss';

export function Footer(props) {
    return (
        <div className={Styles.content}>
            <span className={Styles.text}>Gatsby Example's footer</span>
        </div>
    );
}
