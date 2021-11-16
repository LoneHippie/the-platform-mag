import React from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import Seo from './../components/Seo';
import PostContentLayout from './../components/PostContentLayout';

import ArticleCardLarge from './../components/ArticleCardLarge';
import InterviewCardLarge from './../components/InterviewCardLarge';

import * as classes from './edition.module.scss';

const Edition = ({ data }) => {

    const editionCover = `
        linear-gradient(to bottom right,
            rgba(44, 44, 44, 0.7),
            rgba(44, 44, 44, 0.25)
        ), url(${data.edition.coverImage.file.url})
    `;

    const generateArticleCards = (articles) => {

        const editionArticles = articles.filter(el => !el.subtitle);

        return editionArticles.map((el, index) => (
            <ArticleCardLarge 
                key={`article-card-large-${index}`}
                article={el}
            />
        ))
    };

    const generateInterviewCards = (interviews) => {

        const editionInterviews = interviews.filter(el => el.subtitle);

        return editionInterviews.map((el, index) => (
            <InterviewCardLarge 
                key={`interview-card-large-${index}`}
                interview={el}
            />
        ))
    }

    return (
        <Layout darkNavIcons={false} darkFooterBackground={true}>
            <Seo title={data.edition.editionTitle} />

            <header 
                className={classes.header}
                style={{backgroundImage: editionCover}}
            >

				<div className={classes.header_title}>
					<h1>{data.edition.editionTitle}</h1>
					<h2>{`Platform ${data.edition.slug.replaceAll(/-/g, ' ')}`}</h2>
				</div>

			</header>

            <PostContentLayout>

                <section className={classes.notes_section}>
                    <h3>Editor's Note</h3>
                    <p>{data.edition.editorsNote.editorsNote}</p>
                </section>

                <section className={classes.stories_section}>
                    <h3>Key Stories</h3>

                    { generateArticleCards(data.edition.editionPosts) }

                    <h3>Featured Interview</h3>

                    { generateInterviewCards(data.edition.editionPosts) }

                </section>

                <section className={classes.quote_section}>
                    <h3>Quote of The Month</h3>

                    <p><i>{data.edition.editionQuote}</i></p>

                    <strong>{`- ${data.edition.editionQuoteSource}`}</strong>
                </section>

            </PostContentLayout>

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
                }
            }
        }
    }
`;