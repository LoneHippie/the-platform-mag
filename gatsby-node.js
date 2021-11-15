const path = require('path');

exports.createPages = ({ graphql, actions }) => {

    const { createPage } = actions;

    return graphql(
        `
        {
            allContentfulArticle {
                edges {
                    node {
                        slug
                        isPartOfEdition
                        editionSlug
                    }
                }
            }
            allContentfulInterview {
                edges {
                    node {
                        slug
                        isPartOfEdition
                        editionSlug
                    }
                }
            }
            allContentfulEdition {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
        `
    )
    .then(res => {
        if (res.errors) {
            console.log('error with contentful data');
        }

        const articleTemplate = path.resolve('./src/templates/article.js');
        const interviewTemplate = path.resolve('./src/templates/interview.js');
        const editionTemplate = path.resolve('./src/templates/edition.js');

        res.data.allContentfulArticle.edges.forEach(article => {
            createPage({
                path: `/${article.node.isPartOfEdition ? article.node.editionSlug : 'article'}/${article.node.slug}/`,
                component: articleTemplate,
                context: {
                    slug: article.node.slug
                },
            })
        });

        res.data.allContentfulInterview.edges.forEach(interview => {
            createPage({
                path: `/${interview.node.isPartOfEdition ? interview.node.editionSlug : 'interview'}/${interview.node.slug}/`,
                component: interviewTemplate,
                context: {
                    slug: interview.node.slug
                }
            })
        });

        res.data.allContentfulEdition.edges.forEach(edition => {
            createPage({
                path: `/${edition.node.slug}/`,
                component: editionTemplate,
                context: {
                    slug: edition.node.slug
                }
            })
        });

    })
    .catch(err => console.log('error with contentful data', err))
}