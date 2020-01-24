import React from 'react';

import Styles from './404.module.scss';
import { Layout } from '../components/Layout';

export default () => {
    return (
        <Layout>
            <div className={Styles.content}>
                <h3 className={Styles.title}>404 Sorry, but there is no such thing :'(</h3>
            </div>
        </Layout>
    );
}