import { Link } from "remix";
import { MainLogo } from "../root";
import { AdminHeaderLink } from "../routes/admin";

const Header = () => {
    function mobileNavbar() {
        let con = document.querySelector(".nav-button-cont");
        let img = document.querySelector(".nav-button-image");
        let nav = document.querySelector(".navigation");

        con.classList.toggle("active");
        img.classList.toggle("clicked");
        nav.classList.toggle("open");
    }

    return (
        <header className="header" id="header">
            <Link to="/">
                <MainLogo />
            </Link>
            <nav className="navigation">
                <ul className="nav-list">
                    <li className="nav-items">
                        <Link to="/" className="essentials home">
                            HOME
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/posts" className="essentials posts">
                            POSTS
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/gallery" className="essentials gallery">
                            GALLERY
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/profile" className="essentials profile">
                            PROFILE
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/contact" className="essentials contact">
                            CONTACT
                        </Link>
                    </li>
                    <AdminHeaderLink />
                </ul>
            </nav>
            <div className="nav-button-cont">
                <button className="nav-button" onClick={mobileNavbar}></button>
                <div className="nav-button-image-cont">
                    <object
                        data="/images/svg/triangle.svg"
                        className="nav-button-image"
                    ></object>
                </div>
            </div>
        </header>
    );
};

export default Header;
