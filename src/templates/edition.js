import React, { useMemo } from "react";
import { graphql } from "gatsby";
import {
  Layout,
  Seo,
  PostContentLayout,
  ShareButton,
  ArticleCardLarge,
  InterviewCardLarge,
  VoicesCardLarge,
} from "../components";

import * as classes from "./edition.module.scss";

const Edition = ({ data }) => {
  const editionCover = `
        linear-gradient(to bottom right,
            rgba(44, 44, 44, 0.7),
            rgba(44, 44, 44, 0.25)
        ), url(${data.edition.coverImage.file.url})
    `;

  const articles = useMemo(() => {
    return data.edition.editionPosts.filter(
      (el) => el.system.contentType.type.id === "article"
    );
  }, [data]);

  const interviews = useMemo(() => {
    return data.edition.editionPosts.filter(
      (el) => el.system.contentType.type.id === "interview"
    );
  }, [data]);

  const voices = useMemo(() => {
    return data.edition.editionPosts.filter(
      (el) => el.system.contentType.type.id === "voicesInTheCrowd"
    );
  }, [data]);

  return (
    <Layout darkNavIcons={false} darkFooterBackground={true}>
      <Seo
        title={data.edition.editionTitle}
        propImage={`https:${data.edition.coverImage.file.url}`}
        description={`The Platform Mag's ${data.edition.slug.replaceAll(
          /-/g,
          " "
        )}, ${data.edition.editionTitle}`}
      />

      <header
        className={classes.header}
        style={{ backgroundImage: editionCover }}
      >
        <div className={classes.header_title}>
          <h1>{data.edition.editionTitle}</h1>
          <h2>{`Platform ${data.edition.slug.replaceAll(/-/g, " ")}`}</h2>
        </div>

        <div className={classes.header_share}>
          <ShareButton
            darkIcon={false}
            link={`https://www.theplatformmag.com/${data.edition.slug}`}
          />
        </div>
      </header>

      <PostContentLayout includeRecentEditionsBar={false}>
        <section className={classes.stories_section}>
          <h3>Key Stories</h3>

          {articles.map((article, index) => (
            <ArticleCardLarge article={article} key={`article-card-${index}`} />
          ))}

          {!!interviews.length && (
            <>
              <h3>Featured Interview</h3>

              {interviews.map((interview, index) => (
                <InterviewCardLarge
                  interview={interview}
                  key={`interview-card-${index}`}
                />
              ))}
            </>
          )}

          {!!voices.length && (
            <>
              <h3>Voices In The Crowd</h3>

              {voices.map((voice, index) => (
                <VoicesCardLarge voice={voice} key={`voice-card-${index}`} />
              ))}
            </>
          )}
        </section>

        <section className={classes.quote_section}>
          <h3>Quote of The Month</h3>

          <p>
            <i>{data.edition.editionQuote}</i>
          </p>

          <strong>{`- ${data.edition.editionQuoteSource}`}</strong>
        </section>

        <section className={classes.notes_section}>
          <h3>Editor's Note</h3>
          <p>{data.edition.editorsNote.editorsNote}</p>
        </section>
      </PostContentLayout>
    </Layout>
  );
};

export default Edition;

export const pageQuery = graphql`
  query ($slug: String!) {
    edition: contentfulEdition(slug: { eq: $slug }) {
      slug
      editionTitle
      editionMonth
      editionNumber
      coverImage {
        file {
          url
        }
      }
      editorsNote {
        editorsNote
      }
      editionQuote
      editionQuoteSource
      editionPosts {
        ... on ContentfulArticle {
          postDate(formatString: "MMMM YYYY")
          slug
          author
          authorImage {
            file {
              url
            }
          }
          title
          coverImage {
            description
            file {
              url
            }
          }
          isPartOfEdition
          editionSlug
          text {
            text
          }
          system: sys {
            contentType {
              type: sys {
                id
              }
            }
          }
        }
        ... on ContentfulInterview {
          postDate(formatString: "MMMM YYYY")
          slug
          subtitle
          title
          coverImage {
            description
            file {
              url
            }
          }
          isPartOfEdition
          editionSlug
          text {
            text
          }
          system: sys {
            contentType {
              type: sys {
                id
              }
            }
          }
        }
        ... on ContentfulVoicesInTheCrowd {
          slug
          title
          coverImage {
            description
            file {
              url
            }
          }
          isPartOfEdition
          editionSlug
          introduction {
            introduction
          }
          text {
            text
          }
          system: sys {
            contentType {
              type: sys {
                id
              }
            }
          }
        }
      }
    }
  }
`;
