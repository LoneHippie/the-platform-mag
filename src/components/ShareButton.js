import React from 'react';

import * as classes from './ShareButton.module.scss';

import IconDark from '../images/icon-facebook-share-dark.svg';
import IconLight from '../images/icon-facebook-share-light.svg';

const ShareButton = ({ link, darkIcon }) => {

    return (
        <a
            className={classes.container}
            href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
            target="_blank"
            rel="noreferrer"
            alt="share this page"
        >
            <img 
                src={darkIcon ? IconDark : IconLight}
                alt="share this page on Facebook"
            />
        </a>
    )
};

export default ShareButton;