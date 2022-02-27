import React from 'react';
import { useWindowDimensions } from '../../hooks';

import * as classes from './EditionCardMini.module.scss';

const EditionCardMini = ({ edition }) => {

    const { screenWidth} = useWindowDimensions();

    const formattedEditionMonth = (month) => {
        if (screenWidth >= 568) return month;

        let formattedStr = month.split(' ');

        return `${formattedStr[0].slice(0, 3)} ${formattedStr[1]}`;
    }

    const editionCover = `
        linear-gradient(to bottom right,
            rgba(44, 44, 44, 0.7),
            rgba(44, 44, 44, 0.25)
        ), url(${edition.coverImage.file.url})
    `;

    return (
        <article className={classes.card}>
            <span className={classes.card_edition}>{edition.slug.replaceAll(/-/g, ' ')}</span>
            <div
                className={classes.card_body}
                style={{background: editionCover}}
            >
                <a href={`/${edition.slug}`} alt="Read the full edition">{edition.editionTitle}</a>
            </div>
            <span className={classes.card_date}>{formattedEditionMonth(edition.editionMonth)}</span>
        </article>
    )
};

export default EditionCardMini;