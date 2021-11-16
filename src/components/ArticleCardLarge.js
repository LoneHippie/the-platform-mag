import React from 'react';

import Placeholder from './../images/author_placeholder.svg';

import * as classes from './ArticleCardLarge.module.scss';

const ArticleCardLarge = ({ article }) => {

    return (
        <article className={classes.card}>
            <img 
                className={classes.cover}
                src={`https:${article.coverImage.file.url}`}
                alt={article.coverImage.description}
            />
            <h4 className={classes.title}>{article.title}</h4>
            <div className={classes.meta_section}>
                <img 
                    className={classes.author_image}
                    src={article.authorImage ? `https:${article.authorImage.file.url}` : Placeholder}
                    alt={`The author for this article`}
                />

                <div className={classes.meta_details}>
                    <h5>{article.author}</h5>
                    <h6>{article.postDate}</h6>
                </div>
            </div>
            <p className={classes.preview_text}>{`${article.text.text.slice(0, 160).trim()}...`}</p>
            <a
                href={article.isPartOfEdition ? `/${article.editionSlug}/${article.slug}` : `/article/${article.slug}`}
                alt={'Read the full article here'}
                className={classes.cta_button}
            >
                Read More
            </a>
        </article>
    )
};

export default ArticleCardLarge;