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
        current: [
            {
                name: "SMP 2 Metro Timur",
                url: "https://smpn2metro.sch.id/",
                desc: '"UPTD SMP Negeri 2 Metro pada awalnya merupakan sekolah filial dari SMP Negeri 1 Metro yang menjadi sekolah negeri difinitif dengan Surat Keputusan Menteri Pendidikan dan Kebudayaan. Sekolah ini merupakan salah satu sekolah unggulan masyarakat Kota Metro. Secara geografis UPTD SMP Negeri 2 Metro terletak di perbatasan dengan Kabupaten Lampung Timur. Kondisi seperti ini memberikan peluang bagi  siswa lulusan SD untuk berkompetisi masuk menjadi siswa UPTD SMP Negeri 2 Metro."',
                img: "/images/modules/smp2-2.jpg",
            },
        ],
        school: [
            {
                name: "SMP 2 Metro Timur",
                url: "https://smpn2metro.sch.id/",
                desc: "blablabla",
            },
            {
                name: "SD 4 Metro Timur",
                url: "https://google.com",
                desc: "blablabla",
            },
            {
                name: "TK PKK 1 Yosodadi",
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
                {data.current.map((currents) => (
                    <>
                        <article className="current-text" key={currents}>
                            <div key={currents.name}>
                                <h1 className="current-school">
                                    {currents.name.toLowerCase().replace(/ /g, "_")}()
                                </h1>
                                {cbo}
                            </div>
                            <div key={currents.desc}>
                                <p className="current-par">{currents.desc}</p>
                                {cbc}
                            </div>
                        </article>
                        <img
                            key={currents.img}
                            src={currents.img}
                            alt="current-school-pic"
                        />
                    </>
                ))}
            </div>
        </div>
    );
};

export default Education;
