import React from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import Seo from './../components/Seo';
import PostContentLayout from './../components/PostContentLayout';

import ShareButton from '../components/ShareButton';

import ArticleCardLarge from './../components/ArticleCardLarge';
import InterviewCardLarge from './../components/InterviewCardLarge';
import VoicesCardLarge from './../components/VoicesCardLarge';

import * as classes from './edition.module.scss';

const Edition = ({ data }) => {

    const editionCover = `
        linear-gradient(to bottom right,
            rgba(44, 44, 44, 0.7),
            rgba(44, 44, 44, 0.25)
        ), url(${data.edition.coverImage.file.url})
    `;

    const generateArticleCards = (articles) => {

        const editionArticles = articles.filter(el => !el.subtitle && el.author);

        return editionArticles.map((el, index) => (
            <ArticleCardLarge 
                key={`article-card-large-${index}`}
                article={el}
            />
        ))
    };

    const hasInterviews = data.edition.editionPosts.some(el => el.subtitle);

    const generateInterviewCards = (interviews) => {

        const editionInterviews = interviews.filter(el => el.subtitle);

        return editionInterviews.map((el, index) => (
            <InterviewCardLarge 
                key={`interview-card-large-${index}`}
                interview={el}
            />
        ))
    };

    const hasVoices = data.edition.editionPosts.some(el => !el.subtitle && !el.author);

    const generateVoicesCards = (voices) => {
        
        const editionVoices = voices.filter(el => !el.subtitle && !el.author);

        return editionVoices.map((el, index) => (
            <VoicesCardLarge 
                key={`voices-card-large-${index}`}
                voice={el}
            />
        ))
    };

    return (
        <Layout darkNavIcons={false} darkFooterBackground={true}>
            <Seo 
                title={data.edition.editionTitle} 
                propImage={`https:${data.edition.coverImage.file.url}`}
                description={`The Platform Mag's ${data.edition.slug.replaceAll(/-/g, ' ')}, ${data.edition.editionTitle}`}
            />

            <header 
                className={classes.header}
                style={{backgroundImage: editionCover}}
            >
				<div className={classes.header_title}>
					<h1>{data.edition.editionTitle}</h1>
					<h2>{`Platform ${data.edition.slug.replaceAll(/-/g, ' ')}`}</h2>
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

                    { generateArticleCards(data.edition.editionPosts) }

                    {
                        hasInterviews ? (
                            <>
                                <h3>Featured Interview</h3>

                                { generateInterviewCards(data.edition.editionPosts) }
                            </>
                        ) : null
                    }

                    {
                        hasVoices ? (
                            <>
                                <h3>Voices In The Crowd</h3>

                                { generateVoicesCards(data.edition.editionPosts) }
                            </>
                        ) : null
                    }

                </section>

                <section className={classes.quote_section}>
                    <h3>Quote of The Month</h3>

                    <p><i>{data.edition.editionQuote}</i></p>

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
                }
            }
        }
    }
`;