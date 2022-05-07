import React from 'react';
import { Layout, Seo, PostContentLayout } from "../components";

import * as classes from "./privacy-policy.module.scss";

const PrivacyPolicyPage = () => {
    return (
        <Layout darkFooterBackground={true} darkNavIcons={true}>
            <Seo 
                title="The Platform Mag privacy policy"
                description="Learn more about our privacy policy for the site"
            />

            <PostContentLayout includeRecentEditionsBar={false}>
                <header className={classes.header}>
                    <h1>The Platform Mag Privacy Policy</h1>
                </header>
                <div className={classes.info}>
                    <div>The Platform Mag</div>
                    <div>email: contact@theplatformmag.com</div>
                    <div>date: May 1, 2022</div>
                </div>

                <h2>Our Commitment to Privacy</h2>
                <p>Your privacy is very important to The Platform Mag. This website Privacy and Security statement describes website security measures we have in place to protect your information as well as the information we collect on this website and how we use it. Our core promise to our website visitors is that we will not sell your information-including your email or data on your website usage to anyone.  We will only share it within The Platform Mag or with our partners if you have authorized us to do so. If you have questions about The Platform Mag website privacy and security, please feel free to contact us by the email address shown above, and we'll be happy to assist you.</p>

                <h2>Your Information and How We Use It</h2>
                <p>We may collect anonymous information about website visitors, and we use that to help us improve the website. If we do collect personal information such as your email address or phone number we only do so when you actively choose to enter that information into our website, and we maintain tight, advanced security for that information. In any situation, we never sell your information (whether anonymous or personally identifiable) to anyone.</p>

                <h3>Email Addresses</h3>
                <p>We do not collect visitors' email addresses unless they actively provide them. If visitors do provide email addresses, we do not rent or exchange those email addresses. We use email addresses you provide to contact you in the case of questions you actively ask or to inform you of the publishing of a new edition of The Platform Mag</p>
                <ul>
                    <li>
                        <h4>Cookies</h4>
                        <p>We may collect cookies from our website visitors. A cookie is a text file that our computer places on each visitor's Web browser. Cookies tell us non-personally-identifiable information about our visitors such as what browsers and computer operating systems they use, and ways that they use our website, such as what pages they visit and how long they stay on certain Web page. We do not use this information in a way that identifies you - we use it to help us improve our website's experience for visitors and "remember" them so that we can serve information that is tailored to the way they use the website. You can always delete and block cookies through your Internet browser. Each browser has a different but often simple way to do this.  To find out how, search your browser's "Help" section. Please note that if you delete or block cookies, you may limit some of the capabilities of this website. Learn more about <a href="/cookies" alt="read more about our cookie policy">cookies.</a></p>
                    </li>
                    <li>
                        <h4>Google Analytics</h4>
                        <p>
                            Currently we are using Google Analytics to analyze the audience of
                            the website and improve our content. No personal information is collected from Google Analytics. For further information on the privacy policy concerning Google Analytics, please go <a href="http://www.google.com/analytics/learn/privacy.html" alt="read more about google analytics">here.</a>
                        </p>
                    </li>
                </ul>

                <h2>Future Use of Website Visitor Information</h2>
                <p>From time to time, we may use website visitor information for new, unanticipated uses not previously disclosed here. If our information practices change at some time in the future, we will post the policy changes to this page, date them and provide you with the ability to opt out of these new uses.</p>

                <h2>More Information</h2>
                <p>If you'd like more information about our website's privacy and security, please contact us using the email at the top of this page. We would be happy to speak with you.</p>
            </PostContentLayout>
        </Layout>
    )
};

export default PrivacyPolicyPage;