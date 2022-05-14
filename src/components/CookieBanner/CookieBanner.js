import React from 'react'
import { useState } from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';

const CookieBanner = ({darkFooterBackground}) => {

    const [ bannerFlag, setBannerFlag ] = useState(false);

    const handleRemoveCookies = () => {
        //for checking if window is defined during node build process
        if (typeof window !== 'undefined') {
            Cookies.remove("_ga");
            Cookies.remove("_gat");
            Cookies.remove("_gid");
        }
    }

    useState(() => {
        //for checking if window is defined during node build process
        if (typeof window !== 'undefined') {
            const cookiesList = Cookies.get();
            const consentCookie = cookiesList.hasOwnProperty('gatsby-gdpr-google-analytics')
            setBannerFlag(consentCookie);
        }
    }, []);

    return (
        !bannerFlag && (
            <CookieConsent 
                location='bottom'
                buttonText={"Accept All"}
                declineButtonText={"Accept Necessary"}
                onDecline={handleRemoveCookies}
                enableDeclineButton={true}
                cookieName="gatsby-gdpr-google-analytics"
                expires={150}
                debug={true}
                style={{
                    background: darkFooterBackground ? "#2c2c2c": "#eeeeee",
                    color: darkFooterBackground ? "#eeeeee" : "#2c2c2c",
                    borderRadius: "8px 8px 0px 0px",
                    boxShadow: "-4px 0px 12px 4px rgba(0, 0, 0, 0.4)"
                }}
                buttonStyle={{
                    background: darkFooterBackground ? "#eeeeee" : "#2c2c2c",
                    color: darkFooterBackground ?  "#2c2c2c" : "#eeeeee",
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    borderRadius: "8px",
                }}
                declineButtonStyle={{
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    borderRadius: "8px",
                    backgroundColor: "#026bbb"
                }}
                overlay={true}
                acceptOnOverlayClick={true}
            >
                We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, for other purposes as specified in the <a href="/cookies" style={{color: "#026bbb"}}>cookie policy</a>.
                You can consent to the use of such technologies by using the “Accept All” button. By closing this notice, you continue without accepting.
            </CookieConsent>
        )
    )
}

export default CookieBanner