import aboutStyle from "~/styles/css/profile/about/about.css";
import { json, useLoaderData, Link } from "remix";
import RouteNav from "../../../components/RouteNav";

export let links = () => {
    return [{ rel: "stylesheet", href: aboutStyle }];
};

export let meta = () => {
    return {
        title: "About",
        description: "Everything about this site.",
    };
};

const assets = [
    {
        name: "icon",
        url: "/images/essentials/solelight.png",
        width: "1536px",
        height: "1536px",
        size: "107kb",
    },
    {
        name: "logo",
        url: "/images/essentials/logo-white.png",
        width: "3205px",
        height: "738px",
        size: "53kb",
    },
    {
        name: "qx-idle-animation",
        url: "/images/svg/index-4.svg",
        width: "~ px",
        height: "~ px",
        size: "6.5kb",
    },
];

export let loader = () => {
    let data = {
        tech: [
            { name: "ReactJS" },
            { name: "Remix Run" },
            { name: "NodeJS" },
            { name: "Formspree" },
            { name: "Netlify" },
            { name: "Firebase" },
            { name: "React-Cookie-Consent" },
        ],
        tools: [
            { name: "Front-matter" },
            { name: "Marked" },
            { name: "Tiny-Invariant" },
            { name: "SASS" },
            { name: "Concurrently" },
        ],
        links: [
            {
                name: "source code",
                url: "https://github.com/qwyzex/website",
                platform: "github",
            },
            {
                name: "previous site source code",
                url: "https://github.com/qwyzex/qwzz-website",
                platform: "github",
            },
        ],
    };

    return json(data);
};

export default function About() {
    let data = useLoaderData();

    return (
        <div className="about-container">
            <RouteNav index="custom" custom="/profile" text="profile" />
            <h1>About This Website</h1>
            <article>
                <h3 className="cascade link-content" id="what-is-this-made-of">
                    <a href="#what-is-this-made-of">// What is this made of</a>
                </h3>
                <p>
                    This website is build with <x-remix>Remix</x-remix>, a{" "}
                    <x-react>React-based</x-react> framework. Actually this is my second
                    personal / portofolio website. My old website is still Live on{" "}
                    <a target="_blank" href="https://qwyzex.netlify.app">
                        https://qwyzex.netlify.app
                    </a>
                    . At first, I see <x-nodejs>NodeJS</x-nodejs> is just gonna make my
                    site load longer as they had a crazy sh*t in "node_modules" folder. I
                    started to intrested in <x-react>React</x-react> after re-watching
                    Fireship video about reverse-engineering the Facebook's dropdown menu
                    with <x-react>React</x-react> and Tailwind CSS. Then there's some hype
                    around about <x-remix>Remix</x-remix>, a brand new JavaScript
                    Framework (Actually already running since 2019 but it's paid, then
                    recently they make it free and open-source)
                </p>
                <p>
                    Sometimes I think "Does using a JavaScript framework for a personal
                    website an overkill?". If you asked me what is one think that stress
                    me out during developing my website, It's no-reusable-components. On
                    basic HTML file I have to copy and paste some main components from one
                    file to another html file. And since in that time I had quite some
                    files... It's stressing me out. I watch some <x-react>React</x-react>{" "}
                    tutorial and I quickly understand how reusable-components work.
                    Firstly I tried <x-react>React-CDN</x-react>. And use babel as the
                    "translator" for ES6/JSX syntax. I only use <x-react>React</x-react>{" "}
                    for rendering basic components like header and footer. It work
                    flawlessly, but to be fair, it kills the performance of my website. It
                    loads horribly, and may impact the UX. After actually make a{" "}
                    <x-react>React</x-react> App with{" "}
                    <code>npx create-react-app multi-million-dollar-startup</code>, hell.
                    I fell in love with it, really.
                </p>
            </article>
            <article>
                <h3 className="cascade link-content" id="improvements">
                    <a href="#improvements">// Improvements</a>
                </h3>
                <p>
                    If we look the difference beetwen my first and this second site, it's
                    indeed really different. The Major difference :
                </p>
                <ol>
                    <li>
                        <a href="#consistency">Consistency</a>
                    </li>
                    <li>
                        <a href="#minimalistic">Minimalistic</a>
                    </li>
                    <li>
                        <a href="#performance">Performance</a>
                    </li>
                </ol>
                <article id="consistency">
                    <h3>Consistency</h3>
                    <p>
                        In my previous site, if you ever visit it maybe you'll notice that
                        it's very vibrant and colorful. And you go to other page and it's
                        became dark and cold. There is no persistant or consistency for
                        one vision. And most of the components are made up on every page.
                        Well, sometimes I think it's good... maybe?? I don't know. Every
                        page has they're own unique style, and for some it may appears to
                        be "not good"
                    </p>
                    <p>
                        Well now it's more consistent. Dark, suttle, blurry, simple, but
                        still bring life to it. I really think it's worth it to make a
                        whole new site rather than keep remaking and fixing what's broken
                        (not really).
                    </p>
                </article>
                <article id="minimalistic">
                    <h3>Minimalistic</h3>
                    <p>
                        My previous site is too rich of an elements. The colorful scheme,
                        and many unessecary things floating around. I sometimes hate to
                        see it to be honest. In my current site, I don't provide a whole
                        menu for a category on the header nav. Instead, I only put the
                        main pages. It's also now responsive on both wide and small screen
                    </p>
                </article>
                <article id="performance">
                    <h3>Performance</h3>
                    <p>
                        Maybe the biggest performance decrementials affect my site is when
                        I use <x-react>React</x-react> and{" "}
                        <x-babel>Babel Standalone</x-babel> both trough CDN. It's
                        literally killing the UX, as the header and footer is loaded using{" "}
                        <x-react>React</x-react> components. And using{" "}
                        <x-babel>Babel</x-babel> straighly to the browser is indeed not a
                        good idea.
                    </p>
                    <p>
                        And that is when I actually make a <x-react>React</x-react> app.
                        And discover <x-remix>Remix</x-remix> trough{" "}
                        <x-fireship>Fireship</x-fireship> as the "new"{" "}
                        <x-react>React</x-react> Framework. Couple days later after
                        playing with plain React, I decided to try out{" "}
                        <x-remix>Remix</x-remix>. And I never regret it...
                    </p>
                </article>
            </article>
            <div className="assets">
                <h1>ASSETS</h1>
                <div className="images">
                    <h3 className="cascade">// Logo's And Icons</h3>
                    {assets.map((at) => (
                        <div className="assets-wrapper" key={at.name}>
                            <div className="assets-source" key={at.name}>
                                <label key={at.name}>{at.name.replace(/\-/g, " ")}</label>
                                <img src={at.url} key={at.url} />
                            </div>
                            <div className="assets-data" key={at.name}>
                                <p key={at.width}>
                                    Width : <span key={at.width}>{at.width}</span>
                                </p>
                                <p key={at.height}>
                                    Height : <span key={at.height}>{at.height}</span>
                                </p>
                                <p key={at.size}>
                                    File Size : <span key={at.size}>{at.size}</span>
                                </p>
                                <a download href={at.url} key={at.url}>
                                    DOWNLOAD
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <section className="license">
                    <h3>LICENSE</h3>
                    <p className="cascade">{"// CC-BY-NC-SA-4.0"}</p>
                    <p>
                        Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                        International
                    </p>
                    <hr />
                    <p>
                        You can use this Images for personal use, altough I don't know
                        why... But not for commercial use. You can use it for a thumbnail,
                        maybe. I don't actually know what I'm sayin' smh.
                    </p>
                    <Link to="/profile/about/license" className="cool">
                        READ FULL
                    </Link>
                </section>
            </div>
            <section id="conclusion">
                <h3>CONCLUSION</h3>
                <hr />
                <div className="tech-used">
                    <ul>
                        <h4>Tech Used</h4>
                        {data.tech.map((techs) => (
                            <li key={techs.name}>{techs.name}</li>
                        ))}
                    </ul>
                    <ul>
                        <h4>Tools I Use</h4>
                        {data.tools.map((tool) => (
                            <li key={tool.name}>{tool.name}</li>
                        ))}
                    </ul>
                </div>
                <hr />
                <div className="reference">
                    {data.links.map((link) => (
                        <>
                            <label key={link.name}>{link.name}</label>
                            <a href={link.url} target="_blank">
                                {link.platform}
                            </a>
                        </>
                    ))}
                </div>
            </section>
        </div>
    );
}
