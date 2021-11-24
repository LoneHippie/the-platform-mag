import React from 'react';

import Layout from './../components/Layout';
import Seo from './../components/Seo';

import PostContentLayout from './../components/PostContentLayout';
import ContactForm from './../components/ContactForm';

import IconFB from './../images/icon-facebook.svg';
import IconTwitter from './../images/icon-twitter.svg';

import * as classes from './contact.module.scss';

const ContactPage = () => {

    return (
        <Layout darkNavIcons={true} darkFooterBackground={true}>
            <Seo title="Get in Touch" />

            <PostContentLayout includeRecentEditionsBar={false}>
                <header className={classes.header}>
                    <h1>Get In Touch</h1>
                </header>

                <p className={classes.text}>
                    Have any feedback for how we could improve our site or include new types of content? Feel free to reach out! We're always happy to accept user feedback.
                </p>

                <p className={classes.text}>
                    Our contact options are also open for potential business, advertisment and sponsorship offers as well! Please feel free to send us a message via the form below.
                </p>

                <section className={classes.contact_form}>

                    <div className={classes.contact_form__header}>
                            
                        <h2>Contact Us</h2>

                        <div>
                            <a href="https://facebook.com">
                                <img 
                                    alt="Go check out our Facebook page"
                                    src={IconFB}
                                />
                            </a>
                            <a href="https://twitter.com">
                                <img 
                                    alt="Go check out our Twitter"
                                    src={IconTwitter}
                                />
                            </a>
                        </div>

                    </div>

                    <ContactForm />

                </section>

            </PostContentLayout>

        </Layout>
    )
};

export default ContactPage;