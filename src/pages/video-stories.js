import { graphql } from "gatsby";
import React from "react";
import {
  Layout,
  PostContentLayout,
  Seo,
  VideoCardStandard,
} from "../components";

import * as classes from "./videoStories.module.scss";

const VideoStoriesPage = ({ data }) => {
  const categories = [
    ...new Set(
      data.stories.nodes
        .map((el) => el.videoType)
        .filter(
          (el, index, self) =>
            index ===
            self.findIndex(
              (t) =>
                t.name === el.name &&
                t.description?.description === el.description?.description
            )
        )
    ),
  ];

  const stories = data.stories.edges;

  const getStoriesByCategory = (category) => {
    return stories.filter((el) => el.node.videoType.name === category.name);
  };

  return (
    <Layout darkNavIcons={false} darkFooterBackground={true}>
      <Seo
        title="Stories"
        description="All original video content news stories and interviews from The Platform Mag"
      />

      <header className={classes.header}>
        <h1>Platform Stories</h1>
      </header>

      <PostContentLayout includeRecentEditionsBar={false}>
        <section className={classes.stories_section}>
          {categories.map((el, index) => {
            return (
              <section
                className={classes.stories_section_category}
                key={`section-${index}`}
              >
                <h2>{el.name}</h2>
                <p>{el.description?.description}</p>
                <div>
                  {getStoriesByCategory(el).map((el, index) => (
                    <VideoCardStandard
                      key={`video-card-${index}`}
                      video={el.node}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </section>
      </PostContentLayout>
    </Layout>
  );
};

export default VideoStoriesPage;

export const pageQuery = graphql`
  query {
    stories: allContentfulStories(
      sort: { fields: createdAt }
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          youtubeUrl
          title
          postDate
          postText {
            postText
          }
          videoType {
            ... on ContentfulVideoCategory {
              name
              description {
                description
              }
            }
          }
        }
      }
      nodes {
        videoType {
          ... on ContentfulVideoCategory {
            name
            description {
              description
            }
          }
        }
      }
    }
  }
`;
