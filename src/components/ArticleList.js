import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Styles from './ArticleList.module.scss';
import { Article } from './Article';

export function ArticleList(props) {
    return (
        <StaticQuery
            query = {graphql `
                query {
                    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
                        totalCount
                        edges {
                            node {
                                id
                                frontmatter {
                                    title
                                    image
                                    date(formatString: "MMMM YYYY")
                                    keywords
                                }
                                excerpt
                            }
                        }
                    }
                }`
            }
            render = {data => (
                <div>
                    {
                        data.allMarkdownRemark.edges.map( ({node}) => <Article article={node} />)
                    }
                </div>
            )}
        />
    );
}
