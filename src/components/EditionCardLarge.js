import React from 'react';

import useWindowDimensions from '../hooks/useWindowDimensions';

import * as classes from './EditionCardLarge.module.scss';

const EditionCardLarge = ({ edition, isLatest, isFeatured }) => {

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
        <article
            className={classes.card}
            style={{
                marginTop: isFeatured ? '-10rem' : '0',
                marginBottom: isFeatured ? '3rem' : '1rem'
            }}
        >

            <div 
                className={classes.date_section}
                style={{borderBottom: isFeatured ? '3.5px solid #FFFFFF' : '3.5px solid #000000'}}
            >
                <span style={{color: isFeatured ? '#FFFFFF' : '#000000'}}>{isLatest ? "Latest Edition" : ''}</span>
                <span style={{color: isFeatured ? '#FFFFFF' : '#000000'}}>{formattedEditionMonth(edition.editionMonth)}</span>
            </div>

            <div className={classes.card_body}>

                <div 
                    className={classes.card_body__title} 
                    style={{backgroundImage: editionCover}}
                >
                    <strong>{`Platform ${edition.slug.replaceAll(/-/g, ' ')}`}</strong>
                    <span>{edition.editionTitle}</span>
                    <a
                        href={`/${edition.slug}`}
                        alt="To latest full Platform Edition"
                    >
                        Read More
                    </a>
                </div>

                <div className={classes.card_body__summary}>
                    {edition.editionSummary.editionSummary}
                </div>

            </div>

            <div className={classes.cta_section}>
                { isFeatured ? (
                    <>
                        <a href="/catalogue" alt="Go to past articles and interviews">Past Posts</a>
                        <a href="/editions" alt="Go to past Platform editions">Past Editions</a>
                    </>
                ) : '' }
            </div>

        </article>
    )
};

export default EditionCardLarge;