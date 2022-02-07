import React, { useRef, useEffect } from 'react';
import showdown from 'showdown';

import * as classes from './PostText.module.scss';

const PostText = ({ text }) => {

    const converter = new showdown.Converter();
    const HTML = converter.makeHtml(text);

    const postRef = useRef();

    useEffect(() => {
        if (postRef.current !== undefined) {
            const linkCollection = postRef.current.getElementsByTagName('a');

            if (!linkCollection.length) return

            Array.from(linkCollection).forEach((link) => {
                if (link.href) {
                    link.target = `_blank`
                    link.rel = `noopener noreferrer`
                }
            })
        }
    }, [])

    return (
        <div 
            ref={postRef}
            className={classes.post_body}
            dangerouslySetInnerHTML={{ __html: HTML }} 
        />
    )
};

export default PostText;