import React from 'react';

import * as classes from './InterviewCardLarge.module.scss';

const InterviewCardLarge = ({ interview }) => {

    return (
        <article className={classes.card}>
            <img 
                className={classes.cover}
                src={`https:${interview.coverImage.file.url}`}
                alt={interview.coverImage.description}
            />
            <h4 className={classes.title}>{interview.title}</h4>
            <h5 className={classes.subtitle}>{interview.subtitle}</h5>
            <p className={classes.preview_text}>{`${interview.text.text.slice(0, 160).trim()}...`}</p>
            <a
                href={interview.isPartOfEdition ? `/${interview.editionSlug}/${interview.slug}` : `/interview/${interview.slug}`}
                alt={'Read the full interview here'}
                className={classes.cta_button}
            >
                Read More
            </a>
        </article>
    )
};

export default InterviewCardLarge;