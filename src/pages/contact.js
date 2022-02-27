import React from 'react';
import { Layout, Seo, PostContentLayout, ContactForm } from '../components';

import IconFB from './../images/icon-facebook.svg';
import IconInsta from './../images/icon-insta.svg';

import * as classes from './contact.module.scss';

const ContactPage = () => {

    return (
        <Layout darkNavIcons={true} darkFooterBackground={true}>
            <Seo 
                title="Get in Touch" 
                description={"Have some feedback or want to reach out for potential business or advertising opportunities? Contact us here"}
            />

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

                    <ContactForm formName={"contact page"} />

                </section>

            </PostContentLayout>

        </Layout>
    )
};

export default ContactPage;