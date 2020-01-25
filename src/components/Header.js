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
                    <div className={Styles.title}>
                        <h2>{data.site.siteMetadata.header}</h2>
                    </div>
                </div>
            )}
        />
    );
}