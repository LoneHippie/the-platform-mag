import React from "react";
import { graphql } from "gatsby";
import { Layout, Seo, EditionCardLarge, ContactForm } from "../components";

import IconFB from "./../images/icon-facebook.svg";
import IconInsta from "./../images/icon-insta.svg";

import * as classes from "./index.module.scss";
import VideoCardLarge from "../components/VideoCardLarge/VideoCardLarge";

const IndexPage = ({ data }) => {
  const featuredVideo = data.video.edges.find((el) => el.node.isFeaturedVideo);

  return (
    <Layout darkNavIcons={false} darkFooterBackground={false}>
      <Seo title="Home" />

      <header className={classes.header}>
        <div className={classes.header_title}>
          <h1>PLATFORM MAG</h1>
          <h2>A Home For Ideas</h2>
        </div>
      </header>

      <EditionCardLarge
        edition={data.edition.edges[0].node}
        isFeatured={true}
        isLatest={true}
      />

      <VideoCardLarge video={featuredVideo.node} />

      <section className={classes.contact_section}>
        <div className={classes.contact_form}>
          <div className={classes.contact_form__header}>
            <h3>Get In Touch</h3>

            <div>
              <a href="https://www.facebook.com/people/Platform-mag/100070326180563/">
                <img alt="Go check out our Facebook page" src={IconFB} />
              </a>
              <a href="https://instagram.com/theplatformmag/">
                <img alt="Go check out our Instagram" src={IconInsta} />
              </a>
            </div>
          </div>

          <ContactForm formName="contact" />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    edition: allContentfulEdition(
      sort: { fields: editionNumber, order: DESC }
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          editionTitle
          coverImage {
            file {
              url
            }
          }
          editionMonth(formatString: "MMMM YYYY")
          editionSummary {
            editionSummary
          }
          slug
        }
      }
    }
    video: allContentfulStories(
      sort: { fields: createdAt, order: ASC }
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          youtubeUrl
          title
          postDate(formatString: "DD MM YYYY")
          postText {
            postText
          }
          isFeaturedVideo
        }
      }
    }
  }
`;
