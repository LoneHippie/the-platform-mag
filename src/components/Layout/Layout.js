import React from 'react';
import PropTypes from 'prop-types';

import CookieConsent, { Cookies } from 'react-cookie-consent';

import Nav from '../Nav';
import Footer from '../Footer';

import '../../styles/base.scss';
import * as classes from './Layout.module.scss';

const Layout = ({ children, darkNavIcons, darkFooterBackground }) => {

	console.log({Cookies})

  	return (
		<>
			<Nav darkNavIcons={darkNavIcons} />	

        	<main className={classes.body}>
				{children}
			</main>

        	<Footer darkFooterBackground={darkFooterBackground} />

			{/* <CookieConsent 
				location='bottom'
				buttonText={"Accept All"}
				declineButtonText={"Accept necessary"}
				enableDeclineButton={true}
				cookieName={"ConsentPreferencesCookie"}
				expires={150}
				debug={true}
				style={{
					background: darkFooterBackground ? "#2c2c2c": "#eeeeee",
					color: darkFooterBackground ? "#eeeeee" : "#2c2c2c",
					borderRadius: "8px 8px 0px 0px"
				}}
				buttonStyle={{
					background: darkFooterBackground ? "#eeeeee" : "#2c2c2c",
					color: darkFooterBackground ?  "#2c2c2c" : "#eeeeee",
					fontSize: "1.6rem",
					fontWeight: 800,
					borderRadius: "8px"
				}}
				declineButtonStyle={{
					fontSize: "1.6rem",
					fontWeight: 800,
					borderRadius: "8px"
				}}
				
			>
				We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, for other purposes as specified in the <a href="/cookies">cookie policy</a>.
				You can consent to the use of such technologies by using the “Accept” button. By closing this notice, you continue without accepting.
			</CookieConsent> */}
    	</>
  	)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;