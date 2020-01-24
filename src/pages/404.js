import React from 'react';

import Styles from './404.module.scss';
import { Layout } from '../components/Layout';
import { Title } from '../components/Title';

export default () => {
    return (
        <Layout>
            <div className={Styles.content}>
                <Title>404 Sorry, but there is no such thing :'(</Title>
            </div>
        </Layout>
    );
}