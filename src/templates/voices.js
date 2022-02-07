import React from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import PostContentLayout from './../components/PostContentLayout';
import Seo from './../components/Seo';
import PostText from './../components/PostText';
import RecentEditionsBar from './../components/RecentEditionsBar';

import * as classes from './voices.module.scss';

const Voices = ({ data }) => {

    return (
        <Layout darkNavIcons={true} darkFooterBackground={true}>
            <Seo 
                title={data.voice.title}
                propImage={`https:${data.voice.coverImage.file.url}`}
                description={"See what the everyday person and our readers have to say about current issues"}
                type="article"
            />

            <PostContentLayout includeRecentEditionsBar={!data.voice.isPartOfEdition}>
                <section className={!data.voice.isPartOfEdition ? classes.main_content : ''}>
                    <img 
                        className={classes.cover}
                        src={`https:${data.voice.coverImage.file.url}`}
                        alt={data.voice.coverImage.description}
                    />

                    <h1 className={classes.title}>{data.voice.title}</h1>

                    <PostText text={data.voice.introduction.introduction} />

                    <PostText text={data.voice.text.text} />

                    {
                        data.voice.isPartOfEdition ? (
                            <a  
                                className={classes.back_button}
                                href={`/${data.voice.editionSlug}`}
                                alt="Go back to the edition home page"
                            >Back To Edition</a>
                        ) : null
                    }
                </section>

                {
                    !data.voice.isPartOfEdition ? (
                        <RecentEditionsBar editions={data.editions.edges} />
                    ) : null
                }

            </PostContentLayout>

        </Layout>
    )
};

export default Voices;

export const pageQuery = graphql`
    query($slug: String!) {
        voice: contentfulVoicesInTheCrowd(slug: {eq: $slug}) {
            slug
            title
            coverImage {
                description
                file {
                    url
                }
            }
            introduction {
                introduction
            }
            text {
                text
            }
            isPartOfEdition
            editionSlug
        }
        editions: allContentfulEdition(filter: {node_locale: {eq: "en-US"}}) {
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