import React from 'react';
import showdown from 'showdown';

import Placeholder from './../images/author_placeholder.svg';

import * as classes from './ArticleCardLarge.module.scss';

const ArticleCardLarge = ({ article }) => {

    const formattedText = () => {
        let converter = new showdown.Converter();
        let HTML = converter.makeHtml(article.text.text);
        return HTML;
    };

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
                    loading="lazy"
                />

                <div className={classes.meta_details}>
                    <h5>{article.author}</h5>
                    <h6>{article.postDate}</h6>
                </div>
            </div>
            <div 
                className={classes.preview_text} 
                dangerouslySetInnerHTML={{ __html: formattedText() }}
            />
            <a
                href={article.isPartOfEdition ? `/${article.editionSlug}/${article.slug}` : `/article/${article.slug}`}
                alt={'Read the full article here'}
                className={classes.cta_button}
            >
                Read Full
            </a>
        </article>
    )
};

export default ArticleCardLarge;