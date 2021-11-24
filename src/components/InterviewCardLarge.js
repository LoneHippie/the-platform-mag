import React from 'react';
import showdown from 'showdown';

import * as classes from './InterviewCardLarge.module.scss';

const InterviewCardLarge = ({ interview }) => {

    const formattedText = () => {
        let converter = new showdown.Converter();
        let HTML = converter.makeHtml(interview.text.text);
        return HTML.slice(0, 160).trim().replace(/<p>/g, '') + '...';
    };

    return (
        <article className={classes.card}>
            <img 
                className={classes.cover}
                src={`https:${interview.coverImage.file.url}`}
                alt={interview.coverImage.description}
            />
            <h4 className={classes.title}>{interview.title}</h4>
            <h5 className={classes.subtitle}>{interview.subtitle}</h5>
            <p 
                className={classes.preview_text}
                dangerouslySetInnerHTML={{ __html: formattedText() }}
            />
            <a
                href={interview.isPartOfEdition ? `/${interview.editionSlug}/${interview.slug}` : `/interview/${interview.slug}`}
                alt={'Read the full interview here'}
                className={classes.cta_button}
            >
                Read Full
            </a>
        </article>
    )
};

export default InterviewCardLarge;