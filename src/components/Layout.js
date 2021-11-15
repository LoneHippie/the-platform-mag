import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';
import Footer from './Footer';

import './../styles/base.scss';
import * as classes from './Layout.module.scss';

const Layout = ({ children, darkNavIcons, darkFooterBackground }) => {

  	return (
		<>
			<Nav darkNavIcons={darkNavIcons} />	

        	<main className={classes.body}>
				{children}
			</main>

        	<Footer darkFooterBackground={darkFooterBackground} />
    	</>
  	)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;