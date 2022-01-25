import { json, useLoaderData } from "remix";
import eduStyle from "~/styles/css/education/education.css";
import RouteNav from "../../components/RouteNav";

export let links = () => {
    return [
        {
            rel: "stylesheet",
            href: eduStyle,
        },
    ];
};

export let meta = () => {
    return {
        title: "Education",
        description: "Schools and stuff...",
    };
};

export let loader = () => {
    let data = {
        school: [
            {
                name: "TK PKK 1 Yosodadi",
                desc: "blablabla",
            },
            {
                name: "SD 4 Metro Timur",
                url: "https://google.com",
                desc: "blablabla",
            },
            {
                name: "SMP 2 Metro Timur",
                url: "https://smpn2metro.sch.id/",
                desc: "blablabla",
            },
        ],
    };

    return json(data);
};

const Education = () => {
    return (
        <div className="education-container">
            <RouteNav index={false} text="profile" />
            <h1>Education</h1>
            <section id="current">
                <SchoolCurrent />
            </section>
            <section id="all-list">
                <SchoolList />
            </section>
        </div>
    );
};

const SchoolList = () => {
    let data = useLoaderData();

    return (
        <div className="all-wrapper">
            <h4 className="cascade">// All Schools</h4>
            {data.school.map((schools) => (
                <ul>
                    <li>
                        <h1>{schools.name}</h1>
                        <div>
                            <button className="info-button">?</button>
                            <p className="info-desc">{schools.desc}</p>
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    );
};

const SchoolCurrent = () => {
    let data = useLoaderData();

    var cbo = " {",
        cbc = "} ";

    return (
        <div className="current-container">
            <h4 className="current-title cascade">// CURRENTLY on</h4>
            <div className="current-content">
                {data.school.map((cs) => (
                    <>
                        <article className="current-text" key={cs}>
                            <div key={cs.name}>
                                <h1 className="current-school">
                                    {cs.name.toLowerCase().replace(/ /g, "_")}()
                                </h1>
                                {cbo}
                            </div>
                            <div key={cs.desc}>
                                <p className="current-par">{cs.desc}</p>
                                {cbc}
                            </div>
                        </article>
                        <img
                            key={cs.img}
                            src={cs.img}
                            alt="current-school-pic"
                        />
                    </>
                ))}
            </div>
        </div>
    );
};

export default Education;
