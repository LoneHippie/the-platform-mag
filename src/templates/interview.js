import React from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import PostContentLayout from './../components/PostContentLayout';
import Seo from './../components/Seo';
import PostText from './../components/PostText';
import RecentEditionsBar from './../components/RecentEditionsBar';

import * as classes from './interview.module.scss';

const Interview = ({ data }) => {

    return (
        <Layout darkNavIcons={true} darkFooterBackground={true}>
            <Seo title={data.interview.title} propImage={`https:${data.interview.coverImage.file.url}`} />

            <PostContentLayout includeRecentEditionsBar={!data.interview.isPartOfEdition}>
                <section className={!data.interview.isPartOfEdition ? classes.main_content : ''}>
                    <img 
                        className={classes.cover}
                        src={`https:${data.interview.coverImage.file.url}`}
                        alt={data.interview.coverImage.description}
                    />

                    <h1 className={classes.title}>{data.interview.title}</h1>
                    <h2 className={classes.subtitle}>{data.interview.subtitle}</h2>

                    <PostText text={data.interview.text.text} />

                    {
                        data.interview.isPartOfEdition ? (
                            <a  
                                className={classes.back_button}
                                href={`/${data.interview.editionSlug}`}
                                alt="Go back to the edition home page"
                            >Back To Edition</a>
                        ) : null
                    }
                </section>

                {
                    !data.interview.isPartOfEdition ? (
                        <RecentEditionsBar editions={data.editions.edges} />
                    ) : null
                }

            </PostContentLayout>

        </Layout>
    );
};

export default Interview;

export const pageQuery = graphql`
    query($slug: String!) {
        interview: contentfulInterview(slug: {eq: $slug}) {
            slug
            title
            subtitle
            postDate(formatString: "DD MMMM, YYYY")
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