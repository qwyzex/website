import { Link } from "remix";
import { projects } from "~/data/projects";
import indexStyle from "~/styles/css/index/index.css";

export let links = () => {
    return [{ rel: "stylesheet", href: indexStyle }];
};

export let meta = () => {
    return {
        title: "qwyzeX",
        description: "qwyzeX Personal Portofolio Blog Site",
    };
};

export default function Index() {
    projects.reverse();
    projects.length = 2;

    return (
        <main>
            <div className="page landing split">
                <div className="message" id="welcome">
                    <div className="welcome-text">
                        <p className="cascade absolute random">{"<Welcome />"}</p>
                        <h1 className="">
                            My name is, <x-acc className="big">qwyzeX</x-acc>
                        </h1>
                        <p>
                            I'm a 14y/o Solo Web Developer from <x-acc>Indonesia</x-acc>.
                            Currently getting into <x-acc>economy</x-acc>, love cat :3
                        </p>
                    </div>
                    <div className="learn-more-cont">
                        <Link to="/profile" id="learn-more">
                            ABOUT ME
                        </Link>
                        <Link to="/profile/skills" id="skills">
                            SKILLS
                        </Link>
                    </div>
                </div>
                <div className="picture">
                    <img id="index-doodle" src="/images/svg/index-4.svg" />
                    <p className="cascade terminal">web dev / writer / student</p>
                    {/* <img /> */}
                </div>
            </div>
            <div className="landing-projects">
                <h1>LATEST PROJECT</h1>
                <img src="/images/svg/triangle.svg" className="triangle-1" />
                <img src="/images/svg/triangle.svg" className="triangle-2" />
                <ul>
                    {projects
                        .sort((a, b) => {
                            return b.index - a.index;
                        })
                        .map((p) => (
                            <li key={p.codename}>
                                <div key={p.codename} className="project-info">
                                    <h3 key={p.name}>{p.name}</h3>
                                    <p key={p.desc}>{p.desc}</p>
                                    <span className="cascade" key={p.date}>
                                        {p.date}
                                    </span>
                                    <a href={`/gallery#${p.codename}`}>
                                        <span></span>
                                    </a>
                                </div>
                                <div key={p.repo} className="project-links">
                                    {p.demo ? (
                                        <a href={p.demo} key={p.demo} target="_blank">
                                            DEMO
                                        </a>
                                    ) : null}

                                    <a href={p.repo} key={p.repo} target="_blank">
                                        REPO
                                    </a>
                                </div>
                            </li>
                        ))}
                </ul>
                <div className="gallery-redirect">
                    <Link to="/gallery" className="cool">
                        ...MORE
                    </Link>
                </div>
            </div>
        </main>
    );
}
