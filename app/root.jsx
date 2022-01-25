import {
    Link,
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useCatch,
} from "remix";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cookies from "./components/Cookies";

// styles
import globalStyle from "~/styles/css/global.css";
import headerStyle from "~/styles/css/components/Header.css";
import footerStyle from "~/styles/css/components/Footer.css";

import cookiesStyle from "~/styles/css/components/Cookies.css";
import routeNavStyle from "~/styles/css/components/RouteNav.css";

export let links = () => {
    return [
        {
            rel: "stylesheet",
            href: globalStyle,
        },
        {
            rel: "stylesheet",
            href: headerStyle,
        },
        {
            rel: "stylesheet",
            href: footerStyle,
        },
        {
            rel: "stylesheet",
            href: cookiesStyle,
        },
        {
            rel: "stylesheet",
            href: routeNavStyle,
        },
        {
            rel: "icon",
            href: "/favicon.png",
            type: "image/png",
        },
    ];
};

export default function App() {
    return (
        <Document>
            <Layout>
                <Outlet />
            </Layout>
        </Document>
    );
}

export function ErrorBoundary({ error }) {
    console.error(error);
    return (
        <Document title="Error!">
            <Layout>
                <div>
                    <h1>
                        There was a <bg-red>fatal error</bg-red> with the app
                    </h1>
                    {error.message}
                    <div className="error root">
                        <div>
                            Sorry for the inconvenience, there's an error with the
                            production state of the App. I will fix this soon. Please
                            contact me at <bg-red>qwyzex@yandex.com</bg-red> if this is
                            still occure for some time.
                        </div>
                    </div>
                </div>
            </Layout>
        </Document>
    );
}

export function CatchBoundary() {
    let caught = useCatch();

    let message;
    switch (caught.status) {
        case 401:
            message = (
                <div className="error privilege">
                    You don't have access to visit this page!
                </div>
            );
            break;
        case 404:
            message = (
                <div className="error not-found">
                    <div className="not-found-message">
                        <object
                            data="/images/misc/warning-3.svg"
                            className="errorWarningLogo"
                        ></object>
                        <p>
                            Looks like you tried to visit a page that does not exist in
                            this universe!
                        </p>
                    </div>
                    <div className="not-found-return">
                        <span>Let's get you back from here!</span>
                        <div className="not-found-return-list">
                            <Link to="/">Home</Link>
                            <Link to="/posts">Blog</Link>
                            <Link to="/gallery">Gallery</Link>
                            <Link to="/profile">Profile</Link>
                        </div>
                    </div>
                </div>
            );
            break;

        default:
            throw new Error(caught.data || caught.statusText);
    }

    return (
        <Document title={`${caught.status} ${caught.statusText}`}>
            <Layout>
                <div className="flex jc-center ai-center">
                    <h1>
                        {caught.status}: {caught.statusText}
                    </h1>
                </div>
                {message}
            </Layout>
        </Document>
    );
}

function Document({ children, title }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                {title ? <title>{title}</title> : null}
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === "development" && <LiveReload />}
            </body>
        </html>
    );
}

function Layout({ children }) {
    return (
        <div className="app">
            <Header />
            <div className="main">
                <div className="container main-content">{children}</div>
            </div>
            <Footer />
            <Cookies />
        </div>
    );
}

// property
export function MainLogo() {
    return <img id="mainLogo" src="/images/essentials/logo-white.png" />;
}
