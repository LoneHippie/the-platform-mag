import React from 'react';

import LogoDark from './../images/platform_logo_dark.svg';
import LogoLight from './../images/platform_logo_light.svg';

import * as classes from './Nav.module.scss';

const Nav = ({ darkNavIcons }) => {

    return (
        <div className={classes.nav}>

            <a href="/" alt="back to home page">
                <img 
                    src={darkNavIcons ? LogoDark : LogoLight}
                    className={classes.nav_logo}
                    alt="Back to home page"
                />
            </a>

            <div className={classes.nav_btn}>

                <input type="checkbox" className={classes.nav_btn__checkbox} id="nav-toggle"></input>
                
                <label htmlFor="nav-toggle" className={classes.nav_btn__button}>
                    <span className={darkNavIcons ? classes.nav_btn__icon__dark : classes.nav_btn__icon}>&nbsp;</span>
                </label>

                <div className={darkNavIcons ? classes.nav_btn__background__dark : classes.nav_btn__background}>&nbsp;</div>

                <nav className={darkNavIcons ? classes.nav_btn__nav__dark : classes.nav_btn__nav}>

                    <ul className={darkNavIcons ? classes.nav_btn__list__dark : classes.nav_btn__list}>
                        <li className={classes.nav_btn__item}>
                            <a
                                className={darkNavIcons ? classes.nav_btn__link__dark : classes.nav_btn__link}
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        {/* <li className={classes.nav_btn__item}>
                            <a
                                className={darkNavIcons ? classes.nav_btn__link__dark : classes.nav_btn__link}
                                href="/catalogue"
                            >
                                Catalogue
                            </a>
                        </li> */}
                        <li className={classes.nav_btn__item}>
                            <a
                                className={darkNavIcons ? classes.nav_btn__link__dark : classes.nav_btn__link}
                                href="/editions"
                            >
                                Editions
                            </a>
                        </li>
                        <li className={classes.nav_btn__item}>
                            <a
                                className={darkNavIcons ? classes.nav_btn__link__dark : classes.nav_btn__link}
                                href="/contact"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    )
};

export default Nav;