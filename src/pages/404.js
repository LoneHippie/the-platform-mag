import * as React from "react"

import Layout from './../components/Layout';
import Seo from './../components/Seo';
import PostContentLayout from "../components/PostContentLayout";

import * as classes from './404.module.scss';

const NotFoundPage = () => (
  	<Layout darkNavIcons={true} darkFooterBackground={true}>
		<Seo title="404: Not found" />
		
		<PostContentLayout>
			<header className={classes.header}>
				<h1>404: Not Found</h1>
				<p>This route doesn&#39;t exist...</p>
			</header>

			<p className={classes.explanation}>
				You've just arrived at a url that doesn't exist or currently hold any content. Please either go back or use the navigation menu to redirect to one of our existing pages.
			</p>

			<p className={classes.explanation}>
				If this is an existing page that you've visited previously and you've reached this message, please check your internet conenction and attempt to refresh.
			</p>

			<p className={classes.explanation}>
				If you're experiencing no connectivity issues and you're sure this page should be here, please reach out and let us know, we appreciate it.
			</p>

		</PostContentLayout>
  	</Layout>
)

export default NotFoundPage;