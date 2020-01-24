import React from 'react';

import Styles from './Article.module.scss';

export function Article({ article }) {
    return (
        <article>
            <div>
                <img src={article.frontmatter.image} alt={article.frontmatter.keywords} />
            </div>
            <h4>{article.frontmatter.title}</h4>
            <div>{article.frontmatter.date}</div>
            <div>
                {article.excerpt}
            </div>
        </article>
    );
}
