import React from "react"

import Styles from './index.module.scss';
import { Layout } from '../components/Layout';
import { Title } from '../components/Title';
import { ArticleList } from '../components/ArticleList';

export default () => {
    return (
        <Layout>
            <Title>Hi there, this is the Home page ;)</Title>
            <div className={Styles.content}>
                <ArticleList />
            </div>
        </Layout>
    )
}
