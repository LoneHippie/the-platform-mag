import React from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import Seo from './../components/Seo';

const Edition = ({ data }) => {

    console.log(data);

    return (
        <Layout darkNavIcons={false}>
            <Seo title={data.edition.editionTitle} />

            <h1>{data.edition.editionTitle}</h1>

        </Layout>
    );
};

export default Edition;

export const pageQuery = graphql`
    query($slug: String!) {
        edition: contentfulEdition(slug: {eq: $slug}) {
            slug
            editionTitle
            editionMonth
            editionNumber
            editionPosts {
                ... on ContentfulArticle {
                  slug
                  author
                  title
                }
                ... on ContentfulInterview {
                  slug
                  subtitle
                  title
                }
            }
        }
    }
`;