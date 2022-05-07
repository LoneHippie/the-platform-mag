import React from 'react';
import { Layout, Seo, PostContentLayout } from "../components";

import * as classes from "./cookies.module.scss";

const CookiesPage = () => {
    return (
        <Layout darkNavIcons={true} darkFooterBackground={true}>
            <Seo 
                title="The Platform Mag cookies info"
                description="A list of cookies being used by The Platform Mag website and info on how they're used"
            />

            <PostContentLayout includeRecentEditionsBar={false}>
                <header className={classes.header}>
                    <h1>Cookies and Related Technologies on This Site</h1>
                </header>
                
                <p>
                    Please choose "YES" or "NO" to indicate whether this site may use cookies or related technologies such as web beacons, pixel tags, and Flash objects (“Cookies”) within each category as described below.  
                </p>

                <h2>Strictly Necessary Cookies</h2>
                <p>
                    These cookies are necessary to enable the basic features of this site to function, such as moving from one page to another within the site or accessing the articles.  We cannot give you permission to turn these cookies off because then you would not be able to use the site. Thank you for your understanding.
                </p>

                <h2>Functional Cookies</h2>
                <p>
                    These cookies allow us to provide a better customer experience on this site. For example: remembering your log-in details or other personalized experiences. At this time we have open access to our entire site for all visitors. If or when this changes the functional cookies will need to change as well.
                </p>

                <h2>Analytics Cookies</h2>
                <p>
                    These cookies help us understand how our site is used. We can then use this data to improve how our website works.  We do use these cookies diligently to watch our audience grow and expand. We pay close attention to which articles are read the most. We use this information to expand those topics people are interested in and to eliminate less popular topics.  However, it is entirely your right to opt-out of sharing these cookies with us.
                </p>

                <h2>Advertising Cookies</h2>
                <p>
                    These cookies are used to show you ads that are more relevant to you. We may share this information with advertisers or use it to better understand your interests. For example, Advertising Cookies may be used to share data with advertisers so that the ads you see are more relevant to you, allow you to share certain pages with social networks, or allow you to post comments on our site.
                </p>
            </PostContentLayout>
        </Layout>
    )
}

export default CookiesPage;