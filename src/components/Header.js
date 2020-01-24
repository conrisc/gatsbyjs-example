import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Styles from './Header.module.scss';

export function Header() {
    return (
        <StaticQuery
            query = {graphql `
                query {
                    site {
                        siteMetadata {
                            header
                        }
                    }
                }
            `}

            render = { data => (
                <div className={Styles.content}>
                    <h1 className={Styles.title}>{data.site.siteMetadata.header}</h1>
                </div>
            )}
        />
    );
}