import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Seo, PostContentLayout, PostText } from "../components";

import * as classes from "./missionStatement.module.scss";

const MissionStatementPage = ({ data }) => {
  return (
    <Layout darkNavIcons={true} darkFooterBackground={true}>
        <Seo 
            title="Mission Statement"
            description={"Mission Statement for The Plaform Mag"}
        />

        <PostContentLayout includeRecentEditionsBar={false}>
            <header className={classes.header}>
                <h1>{data.mission.title}</h1>
            </header>

            <PostText 
                text={data.mission.text.text}
            />

        </PostContentLayout>
    </Layout>
  )
}

export default MissionStatementPage;

export const pageQuery = graphql`
    query  {
    mission: contentfulMissionStatement {
        title
        text {
            text
        }
    }
}
`;