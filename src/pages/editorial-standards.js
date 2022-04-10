import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Seo, PostContentLayout, PostText } from "../components";

import * as classes from "./editorialStandards.module.scss";

const EditorialStandardsPage = ({ data }) => {
  return (
    <Layout darkNavIcons={true} darkFooterBackground={true}>
        <Seo 
            title="Editorial Standards"
            description={"Editorial standards for The Plaform Mag"}
        />

        <PostContentLayout includeRecentEditionsBar={false}>
            <header className={classes.header}>
                <h1>{data.standards.title}</h1>
            </header>

            <PostText 
                text={data.standards.text.text}
            />

        </PostContentLayout>
    </Layout>
  )
}

export default EditorialStandardsPage;

export const pageQuery = graphql`
    query {
        standards: contentfulEditorialStandards {
            title
            text {
                text
            }
        }
    }
`;