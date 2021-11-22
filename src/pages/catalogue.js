import React, { useState } from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import Seo from './../components/Seo';

import PostContentLayout from './../components/PostContentLayout';
import RecentEditionsBar from '../components/RecentEditionsBar';

import ArticleCardLarge from './../components/ArticleCardLarge';
import InterviewCardLarge from './../components/InterviewCardLarge';

import * as classes from './catalogue.module.scss';

const postTypes = {
    ARTICLE: 'article',
    INTERVIEW: 'interview',
    VOICES: 'voices in the crowd'
};

const CataloguePage = ({ data }) => {

    const [ postType, setPostType ] = useState(postTypes.ARTICLE);

    const generatePostCards = (postType) => {
        let postsArr = [];

        if (postType === postTypes.ARTICLE) {
            const filteredPosts = data.articles.edges.filter(el => el.node.isPartOfEdition === false);

            postsArr = filteredPosts.map((el, index) => (
                <ArticleCardLarge 
                    key={`article-card-${index}`}
                    article={el.node}
                />
            ))
        }
        if (postType === postTypes.INTERVIEW) {
            const filteredPosts = data.interviews.edges.filter(el => el.node.isPartOfEdition === false);

            postsArr = filteredPosts.map((el, index) => (
                <InterviewCardLarge 
                    key={`interview-card-${index}`}
                    interview={el.node}
                />
            ))
        }

        return postsArr;
    };

    return (
        <Layout darkNavIcons={false} darkFooterBackground={true}>
            <Seo title="Catalogue" />

            <header className={classes.header}>
                <h1>PLATFORM CATALOGUE</h1>

                <div className={classes.toggle_buttons}>
                    <button 
                        onClick={() => setPostType(postTypes.ARTICLE)}
                        className={postType === postTypes.ARTICLE ? classes.button_active : ''}
                    >
                        Articles
                    </button>
                    <button 
                        onClick={() => setPostType(postTypes.INTERVIEW)}
                        className={postType === postTypes.INTERVIEW ? classes.button_active : ''}
                    >
                        Interviews
                    </button>
                </div>
            </header>

            <PostContentLayout includeRecentEditionsBar={true}>
                
                <section className={classes.main_content}>
                    { generatePostCards(postType) }
                </section>

                <RecentEditionsBar editions={data.editions.edges} />

            </PostContentLayout>

        </Layout>
    )
};

export default CataloguePage;

export const pageQuery = graphql`
    query {
        articles: allContentfulArticle(sort: {fields: postDate}) {
            edges {
                node {
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
            }
        }
        interviews: allContentfulInterview(sort: {fields: postDate}) {
            edges {
                node {
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