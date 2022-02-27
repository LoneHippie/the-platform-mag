import React, { useRef } from 'react';
import { useOnScreen } from '../../hooks';

import * as classes from './TeamCard.module.scss';

//TODO ::: Make cards less wide on desktop to avoid clipping images

const TeamCard = ({ image, title, name, description }) => {

    const ref = useRef();
    const inView = useOnScreen(ref);

    return (
        <div 
            className={classes.card}
            style={{
                opacity: inView ? '1' : '0',
                transform: inView ? 'translateX(0)' : 'translateX(-10rem)',
                transition: 'all 650ms' 
            }}
            ref={ref}
        >
            <div
                style={{
                    backgroundImage: `url(https:${image})`
                }}
            ></div>

            <h4>{title}</h4>

            <p>{description}</p>

        </div>
    )
};

export default TeamCard;