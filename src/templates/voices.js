// import React from 'react';
// import { graphql } from 'gatsby';

// import Layout from './../components/Layout';
// import PostContentLayout from './../components/PostContentLayout';
// import Seo from './../components/Seo';
// import PostText from './../components/PostText';
// import RecentEditionsBar from './../components/RecentEditionsBar';

// import * as classes from './voices.module.scss';

// const Voices = ({ data }) => {

//     return (
//         <Layout darkNavIcons={true} darkFooterBackground={true}>
//             <Seo 
//                 title={data.voice.title}
//                 propImage={`https:${data.voice.coverImage.file.url}`}
//                 description={"See what the everyday person and our readers have to say about current issues"}
//                 type="article"
//             />

//             <PostContentLayout includeRecentEditionsBar={!data.voice.isPartOfEdition}>
//                 <section className={!data.voices.isPartOfEdition ? classes.main_content : ''}>
//                     <img 
//                         className={classes.cover}
//                         src={`https:${data.voices.coverImage.file.url}`}
//                         alt={data.voices.coverImage.description}
//                     />

//                     <h1 className={classes.title}>{data.voices.title}</h1>

//                     <PostText text={data.voices.introduction.introduction} />

//                     <PostText text={data.voices.text.text} />

//                     {
//                         data.voices.isPartOfEdition ? (
//                             <a  
//                                 className={classes.back_button}
//                                 href={`/${data.voices.editionSlug}`}
//                                 alt="Go back to the edition home page"
//                             >Back To Edition</a>
//                         ) : null
//                     }
//                 </section>

//                 {
//                     !data.interview.isPartOfEdition ? (
//                         <RecentEditionsBar editions={data.editions.edges} />
//                     ) : null
//                 }

//             </PostContentLayout>

//         </Layout>
//     )
// };

// export default Voices;

// export const pageQuery = graphql`
//     query($slug: String!) {
//         voice: contentfulVoicesInTheCrowd(slug: {eq: $slug}) {
//             slug
//             title
//             coverImage {
//                 description
//                 file {
//                     url
//                 }
//             }
//             introduction {
//                 introduction
//             }
//             text {
//                 text
//             }
//             isPartOfEdition
//             editionSlug
//         }
//         editions: allContentfulEdition {
//             edges {
//                 node {
//                   coverImage {
//                     file {
//                       url
//                     }
//                   }
//                   editionMonth(formatString: "MMMM YYYY")
//                   editionTitle
//                   slug
//                   editionNumber
//                 }
//             }
//         }
//     }
// `;