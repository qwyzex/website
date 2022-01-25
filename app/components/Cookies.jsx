import { Link } from "remix";
import CookieConsent from "react-cookie-consent";

const Cookies = () => {
    const CookieImage = () => {
        return <img src="/images/misc/person-black.png" />;
    };

    return (
        <CookieConsent
            // debug={true}
            buttonText="OKAY"
            cookieName="dev-consent"
            expires={30}
            disableStyles={true}
            // identifier
            containerClasses="cookies-container"
            buttonWrapperClasses="cookies-button-wrapper"
            buttonClasses="cookies-button"
            contentClasses="cookies-content"
        >
            <CookieImage />
            <p>
                This site is still under development and may had some compability issue!
                Please <Link to="/contact">contact</Link> me if there is a problem. Thank
                You!
            </p>
        </CookieConsent>
    );
};

export default Cookies;
