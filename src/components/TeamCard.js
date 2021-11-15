import React from 'react';

import * as classes from './TeamCard.module.scss';

const TeamCard = ({ image, title, name, description }) => {

    return (
        <div className={classes.card}>
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