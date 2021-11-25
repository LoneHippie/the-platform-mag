import React from 'react';
import showdown from 'showdown';

import * as classes from './PostText.module.scss';

const PostText = ({ text }) => {

    const converter = new showdown.Converter();
    const HTML = converter.makeHtml(text);

    return (
        <div 
            className={classes.post_body}
            dangerouslySetInnerHTML={{ __html: HTML }} 
        />
    )
};

export default PostText;