import React from "react"
import { graphql } from 'gatsby';

import Styles from './index.module.scss';
import { Layout } from '../components/Layout';
import { Title } from '../components/Title';
import { Article } from '../components/Article';

export default ({data}) => {
    return (
        <Layout>
            <Title>Hi there, this is the Home page ;)</Title>
            <div className={Styles.content}>
                {
                    data.allMarkdownRemark.edges.map( ({node}) => <Article article={node} />)
                }
            </div>
        </Layout>
    )
}

export const query = graphql `query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        totalCount
        edges {
            node {
                id
                frontmatter {
                    title
                    image
                    date(formatString: "MMMM YYYY")
                }
                excerpt
            }
        }
    }
}`;

