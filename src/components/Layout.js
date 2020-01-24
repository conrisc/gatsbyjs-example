import React from 'react';

import Styles from './Layout.module.scss';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children }) {
    return (
        <div className={Styles.content}>
            <Header />
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
