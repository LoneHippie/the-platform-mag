import React from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import Seo from './../components/Seo';
import PostText from './../components/PostText';

const Interview = ({ data }) => {

    return (
        <Layout darkNavIcons={true}>
            <Seo title={data.interview.title} />

            <img 
                src={`https:${data.interview.coverImage.file.url}`}
                alt={data.interview.coverImage.description}
            />

            <h1>{data.interview.title}</h1>
            <p>{data.interview.subtitle}</p>

            <PostText text={data.interview.text.text} />

        </Layout>
    );
};

export default Interview;

export const pageQuery = graphql`
    query($slug: String!) {
        interview: contentfulInterview(slug: {eq: $slug}) {
            slug
            title
            subtitle
            coverImage {
                description
                file {
                    url
                }
            }
            text {
                text
            }
        }
    }
`;