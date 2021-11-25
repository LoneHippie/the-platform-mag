import React from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import Seo from './../components/Seo';
import EditionCardLarge from './../components/EditionCardLarge';
import TeamCard from './../components/TeamCard';
import ContactForm from './../components/ContactForm';

import IconFB from './../images/icon-facebook.svg';
import IconInsta from './../images/icon-insta.svg';

import * as classes from './index.module.scss';

const IndexPage = ({ data }) => {

	return (
		<Layout darkNavIcons={false} darkFooterBackground={false}>
			<Seo title="Home" />

			<header className={classes.header}>

				<div className={classes.header_title}>
					<h1>PLATFORM MAG</h1>
					<h2>A Home For Ideas</h2>
				</div>

			</header>

			<EditionCardLarge 
				edition={data.edition.edges[0].node}
				isFeatured={true}
				isLatest={true}
			/>

			<section className={classes.mission_section}>

				<h3>Our Mission</h3>

				<p>In an age of public distrust in the media, there is a need for a responsible outlet that seeks to give a platform to all voices, whether they emanate from the right or from the left. Platform Mag is this outlet. We here, at Platform Mag recognize that free speech and robust debate, which produce an informed public, are necessary for the functioning and continuation of democratic and republican institutions. We therefore welcome a diversity of thought among our writers.</p>

				<p>We recognize that the staff and contributors of Platform Mag do come from certain backgrounds that colour our biases, but nevertheless, we seek to publish works irrespective of our or their bias. This being said, we at Platform Mag do judge a work for publication based on certain writing standards, which are apolitical in nature and greater detail on our writing standards and our definitions of hate speech can be found in the Editorial Standards below.</p>

				<p>The public is invited to engage with us through submitting articles of their own and to give feedback on our articles. In order to advance our values of open and honest engagement, we expect our audience to hold us to our mission statement and editorial standards and in the event that relevant factual corrections are necessary to an article, we encourage the public to contact us and make their case</p>

			</section>

			<section className={classes.standards_section}>

				<h3>Editorial Standards</h3>

				<p>Platform magazine stands with the 1st Amendment and encouraging free informative debate, not only legally but culturally as well.</p>

				<p>Plagiarism or the knowing provision of demonstrably false information will obviously not be published.</p>

				<p>Quotes or terms in articles, will usually have a hyperlink to source them to another news article, so readers can learn more about these terms and quotes.</p>

				<p><strong>Writing standards:</strong> Platform looks for well-structured and insightful articles. We welcome both progressive and conservative narratives and ideas and there is no requirement or expectation for our articles to be unbiased, unlike our decision to publish an article, which is based solely on the quality of the writing and the assumption that there will be none of the mentioned violations (such as hate speech, etc).</p>

				<p><strong>Hate Speech:</strong> any call for the dehumanization of one people over another on the basis of immutable characteristics and/or any call to do violence to said community.</p>

				<p>To combat misinformation, we will encourage the public to give us feedback on the article and if corrections are needed, to state their case.</p>

			</section>

			<section className={classes.team_section}>

				<h3>Our Team</h3>

				<div className={classes.team_grid}>

					{
						data.team.edges.map((el, index) => (
							<TeamCard 
								key={`team-member-${index}`}
								image={el.node.portrait.file.url}
								title={el.node.role}
								name={el.node.name}
								description={el.node.summary.summary}
							/>
						))
					}

				</div>

			</section>

			<section className={classes.contact_section}>
				
				<div className={classes.contact_form}>

					<div className={classes.contact_form__header}>
						
						<h3>Get In Touch</h3>

						<div>
							<a href="https://facebook.com/ThePlatformMagazine/">
								<img 
									alt="Go check out our Facebook page"
									src={IconFB}
								/>
							</a>
							<a href="https://instagram.com/theplatformmag/">
                                <img 
                                    alt="Go check out our Instagram"
                                    src={IconInsta}
                                />
                            </a>
						</div>

					</div>

					<ContactForm />
				</div>

			</section>

		</Layout>
	)
}

export default IndexPage;

export const pageQuery = graphql`
	query {
		edition: allContentfulEdition(sort: {fields: editionNumber, order: DESC}) {
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
				}
			}
		}
		team: allContentfulTeamMember(sort: {fields: createdAt}) {
			edges {
			  	node {
					name
					portrait {
				  		file {
							url
				  		}
					}
					role
					summary {
				  		summary
					}
			  	}
			}
		}
	}
`;