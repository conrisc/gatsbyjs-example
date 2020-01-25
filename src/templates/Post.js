import React from 'react';
import { graphql } from 'gatsby';

import Styles from './Post.module.scss';
import { Layout } from '../components/Layout';
import { Title } from '../components/Title';

export default function Post({ data }) {
    const post = data.markdownRemark;

    return (
        <Layout>
            <Title>{post.frontmatter.title}</Title>
            <div className={Styles.container}>
                <div style={{
                    width: '100%',
                    height: '200px',
                    backgroundColor: '#fafafa',
                    backgroundImage: 'Url(https://source.unsplash.com/960x200/?' + post.frontmatter.keywords + ')',

                }}></div>
                <div
                    className={Styles.content}
                    dangerouslySetInnerHTML={{ __html: post.html }}>
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                keywords
            }
        }
    }
`;
