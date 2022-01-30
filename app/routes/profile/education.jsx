import eduStyle from "~/styles/css/education/education.css";
import RouteNav from "../../components/RouteNav";

export let links = () => {
    return [{ rel: "stylesheet", href: eduStyle }];
};

export let meta = () => {
    return {
        title: "Education",
        description: "Schools and stuff...",
    };
};

import { db } from "~/root";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const schoolsRef = collection(db, "schools");
const q = query(schoolsRef, orderBy("yearIn"));
const qLast = query(schoolsRef, orderBy("yearIn", "desc"), limit(1));

const Education = () => {
    const [schools] = useCollectionData(q, { idField: "id" });
    
    return (
        <div className="education-container">
            <RouteNav index={false} text="profile" />
            {schools ? (
                <>
                    <CurrentSchool />
                    <AllSchool />
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

const CurrentSchool = () => {
    const [schoolCurrent] = useCollectionData(qLast, { idField: "id" });
    
    return (
        <section id="current">
            <div className="current-container">
                <h1 className="current-title">CURRENT</h1>
                <div className="current-content">
                    {schoolCurrent &&
                        schoolCurrent.map((sc) => (
                            <>
                                <article className="current-text">
                                    <div>
                                        <h1 className="current-school">
                                            {sc.name.toLowerCase().replace(/ /g, "_")}
                                            {`({ ${sc.yearIn} })`}
                                        </h1>
                                        {"{"}
                                    </div>
                                    <div>
                                        <p className="current-par">{sc.description}</p>
                                        {"}"}
                                    </div>
                                </article>
                                <img src={sc.image} alt={`${sc.name} Picture`} />
                            </>
                        ))}
                </div>
            </div>
        </section>
    );
};

const AllSchool = () => {
    const [schools] = useCollectionData(q, { idField: "id" });

    return (
        <section id="all-list">
            <div className="all-wrapper">
                <h4 className="cascade">// All Schools</h4>
                {schools &&
                    schools.map((sl) => (
                        <ul>
                            <li>
                                <h1>{sl.name}</h1>
                                <div>
                                    <button className="info-button">?</button>
                                    <p className="info-desc">{sl.description}</p>
                                </div>
                            </li>
                        </ul>
                    ))}
            </div>
        </section>
    );
};

export default Education;
