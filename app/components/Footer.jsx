import { Link } from "remix";

const Footer = () => {
    // footer
    return (
        <footer id="footer">
            <div className="footer-content">
                <ul className="footer-socials">
                    <li>
                        <a
                            href="https://github.com/qwyzex"
                            target="_blank"
                            className="github"
                        >
                            <img src="/images/misc/github.png" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://instagram.com/qwyzex"
                            target="_blank"
                            className="instagram"
                        >
                            <img src="/images/misc/instagram.png" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://facebook.com/qwyzex"
                            target="_blank"
                            className="facebook"
                        >
                            <img src="/images/misc/facebook.png" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/qwyzex"
                            target="_blank"
                            className="twitter"
                        >
                            <img src="/images/misc/twitter.png" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://youtube.com/channel/UCUgf36IXL1h-nXNJbZTadmQ"
                            target="_blank"
                            className="youtube"
                        >
                            <img src="/images/misc/youtube.png" />
                        </a>
                    </li>
                    <li>
                        <Link to="/contact" className="contact">
                            <img src="/images/misc/contact.png" />
                        </Link>
                    </li>
                </ul>
                <div className="copyright-container">
                    <p>Copyright &copy; 2021 Ihsan Fashbir. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
