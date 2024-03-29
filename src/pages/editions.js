import React from "react";
import { graphql } from "gatsby";
import { Layout, Seo, EditionCardLarge } from "../components";

import * as classes from "./editions.module.scss";

const EditionsPage = ({ data }) => {
  const sortedEditions = data.editions.edges.sort(
    (a, b) => b.node.editionNumber - a.node.editionNumber
  );

  return (
    <Layout darkNavIcons={true} darkFooterBackground={true}>
      <Seo
        title="Editions"
        description={
          "A collection of all Platform Mag full editions. Read the latest edition and more here"
        }
      />

      <header className={classes.header}>
        <h1>Platform Editions</h1>
      </header>

      <section className={classes.editions_section}>
        {sortedEditions.map((el, index) => (
          <EditionCardLarge
            key={`edition-card-${index}`}
            edition={el.node}
            isFeatured={false}
            isLatest={index === 0 ? true : false}
          />
        ))}
      </section>
    </Layout>
  );
};

export default EditionsPage;

export const pageQuery = graphql`
  query {
    editions: allContentfulEdition(
      sort: { fields: editionNumber }
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
          editionNumber
        }
      }
    }
  }
`;
