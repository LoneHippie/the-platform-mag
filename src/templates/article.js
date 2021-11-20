import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import PostContentLayout from '../components/PostContentLayout';
import Seo from './../components/Seo';
import PostText from './../components/PostText';
import RecentEditionsBar from './../components/RecentEditionsBar';

import Placeholder from './../images/author_placeholder.svg';

import * as classes from './article.module.scss';

const Article = ({ data }) => {

    return (
        <Layout darkNavIcons={true} darkFooterBackground={true}>
            <Seo title={data.article.title} />

            <PostContentLayout includeRecentEditionsBar={!data.article.isPartOfEdition}>
                <section className={!data.article.isPartOfEdition ? classes.main_content : ''}>
                    <img 
                        className={classes.cover}
                        src={`https:${data.article.coverImage.file.url}`}
                        alt={data.article.coverImage.description}
                    />

                    <h1 className={classes.title}>{data.article.title}</h1>

                    <div className={classes.meta_section}>
                        <img 
                            className={classes.author_image}
                            src={data.article.authorImage ? `https:${data.article.authorImage.file.url}` : Placeholder}
                            alt={`The author for this article`}
                        />

                        <div className={classes.meta_details}>
                            <h3>{data.article.author}</h3>
                            <h4>{data.article.postDate}</h4>
                        </div>
                    </div>

                    <PostText text={data.article.text.text} />

                    {
                        data.article.isPartOfEdition ? (
                            <a  
                                className={classes.back_button}
                                href={`/${data.article.editionSlug}`}
                                alt="Go back to the edition home page"
                            >Back To Edition</a>
                        ) : null
                    }
                </section>

                {
                    !data.article.isPartOfEdition ? (
                        <RecentEditionsBar editions={data.editions.edges} />
                    ) : null
                }

            </PostContentLayout>

        </Layout>
    );
};

export default Article;

export const pageQuery = graphql`
    query($slug: String!) {
        article: contentfulArticle(slug: {eq: $slug}) {
            slug
            title
            author
            postDate(formatString: "DD MMMM, YYYY")
            authorImage {
                file {
                    url
                }
            }
            coverImage {
                description
                file {
                    url
                }
            }
            text {
                text
            }
            isPartOfEdition
            editionSlug
        }
        editions: allContentfulEdition {
            edges {
                node {
                  coverImage {
                    file {
                      url
                    }
                  }
                  editionMonth(formatString: "MMMM YYYY")
                  editionTitle
                  slug
                  editionNumber
                }
            }
        }
    }
`;