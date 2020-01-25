import React from 'react';

import Styles from './Article.module.scss';

export function Article({ article }) {
    return (
        <article className={Styles.article}>
            <div className={Styles.thumbnail}>
                <img src={article.frontmatter.image} alt={article.frontmatter.keywords} />
            </div>
            <div className={Styles.details}>
                <h3>{article.frontmatter.title}</h3>
                <div className={Styles.date}>{article.frontmatter.date}</div>
                <div className={Styles.excerpt}>
                    {article.excerpt}
                </div>
            </div>
        </article>
    );
}
