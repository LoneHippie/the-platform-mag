import React from 'react';

import * as classes from './PostContentLayout.module.scss';

const PostContentLayout = ({ children }) => {

    return (
        <section className={classes.layout}>
            {children}
        </section>
    )
};

export default PostContentLayout;