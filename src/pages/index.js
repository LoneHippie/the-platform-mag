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

				<p>The name Democracy comes from the Greek words “demos” (meaning people) and “kratos” (meaning power). The idea of the government reflecting the will of its people is a concept that even authoritarian regimes pay lip service to (for example the Democratic People of North Korea) and definitions for “democracy” can vary dramatically. What criteria does a Government need to meet in order to be a reflection of the ‘will of its people’? Is it perhaps just the existence of elections and the leader securing the majority of the vote? Is it likely that many would argue that the existence of elections isn't enough and there would need to be safeguards to protect against potential intimidation of political candidates or tampering with voting results. However, election oversight is just one important method of protecting democracy. In order for legitimate elections to have any weight, there must also be freedom of speech and press, to allow for different political ideas to be considered, including those that are critical of elected officials. Thus these two critical freedoms (of speech and press) serve as guarantors that the public will have the ability to gain the information to educate themselves on their leaders and hopefully make informed decisions.</p>

				<p>In an age of public distrust in the media, there is a need for a media outlet that will accept the responsibility to give a platform to all voices, irrespective of whether those voices are conservative or progressive. Platform Mag was created to be this outlet. We therefore welcome a diversity of thought among our writers.</p>

				<p>We recognize that the staff and contributors of Platform Mag do come from certain backgrounds that color our biases, in fact all of our works are Op-Eds. The public is invited to engage with us through submitting articles of their own and to give feedback on our articles, either on our Instagram (@theplatformmag) or Facebook page. Platform Mag does judge a work for publication based on certain writing standards, such as the structure, clarity and grammar of the article. However, if a contributor feels that he or she was denied publishing a fact or article because of political bias from the editorial staff and not the quality of the article itself, they are welcome and encouraged to post on our Facebook page and hold Platform Mag accountable to the values of Free Speech that inspired its creation and we will have to defend the reason behind the article not being published. Greater detail on our writing requirements can be found in Platform’s Editorial Standards.</p>

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

					<ContactForm formName="contact" />
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