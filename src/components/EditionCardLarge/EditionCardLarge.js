import React from 'react';
import { useWindowDimensions } from '../../hooks';

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
                marginBottom: isFeatured ? '3rem' : '1rem',
                transition: 'all 650ms'
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
                        Read Full Edition
                    </a>
                </div>

                <div className={classes.card_body__summary}>
                    {edition.editionSummary.editionSummary}
                </div>

            </div>

            {/* <div className={classes.cta_section}>
                { isFeatured && (
                    <>
                        <a className={classes.cta_section__edition} href="/editions" alt="Go to past Platform editions">View Past Editions</a>
                        <div className={classes.cta_section__info}>
                            <a href="/mission-statement" alt="Go to mission standards page">View Mission Statement</a>
                            <a href="/editorial-standards" alt="Go to editorial standards page">View Editorial Standards</a>
                            <a href="/our-team" alt="Go to our team page">Meet The Team</a>
                        </div>
                    </>
                )}
            </div> */}

        </article>
    )
};

export default EditionCardLarge;