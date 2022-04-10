import { graphql } from 'gatsby';
import React from 'react'
import { Layout, Seo, PostContentLayout, TeamCard } from "../components";

import * as classes from "./ourTeam.module.scss";

const OurTeamPage = ({ data }) => {
  return (
    <Layout darkNavIcons={true} darkFooterBackground={true}>
        <Seo 
            title="Meet The Team"
            description={"Meet The Platform Mag's current team"}
        />

        <PostContentLayout includeRecentEditionsBar={false}>
            <header className={classes.header}>
                <h1>Meet The Team</h1>
            </header>

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

        </PostContentLayout>
    </Layout>
  )
}

export default OurTeamPage;

export const pageQuery = graphql`
    query {
        team: allContentfulTeamMember(sort: {fields: createdAt}, filter: {node_locale: {eq: "en-US"}}) {
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
`