import { projects } from "~/data/projects";
import galleryStyle from "~/styles/css/gallery/gallery.css";

export let links = () => {
    return [{ rel: "stylesheet", href: galleryStyle }];
};

export let meta = () => {
    return {
        title: "Gallery",
        description: "qwyzeX's Gallery.",
    };
};

const Gallery = () => {
    const cardClass = `project.type === "big" ? "big" : project.type === "medium" ? "medium" : "mini"`;

    // prettier-ignore
    return (
        <div className="gallery-container">
            <h1>GALLERY</h1>
            <div className="projects">
                <h2 className="cascade">// Projects</h2>
                <section>
                    {projects
                        /*.sort((a, b) => a.date - b.date)*/
                        .map(
                            (
                                project // listed projects
                            ) => (
                                <div
                                    key={project.codename}
                                    id={project.codename}
                                    className={`card ${project.type === "big" ? "big" : project.type === "medium" ? "medium" : "mini"}`}
                                >
                                    <header>
                                        <h3 key={project.name}>{project.name}</h3>
                                        <p key={project.lang} className="cascade language-wrapper">
                                            {project.lang.map((l) => (
                                                <p key={l}>{l}</p>
                                            ))}
                                        </p>
                                        <p key={project.desc}>{project.desc}</p>
                                        <a
                                            key={project.repo}
                                            className="source-code fill"
                                            target="_blank"
                                            href={project.repo}
                                        >
                                            <span key={project.repo}></span>
                                        </a>
                                    </header>
                                    <hr />
                                    <div
                                        key={project.about}
                                        className="description-wrapper"
                                    >
                                        {project.about.map((l) => (
                                                <p key={l} className="description-items">{l}</p>
                                            ))}
                                    </div>
                                    <footer
                                    key={project.demo}
                                        className={
                                            project.type === "big" 
                                            ? "big" 
                                            : project.type === "medium" 
                                            ? "medium" 
                                            : "mini"
                                        }
                                    >
                                        {project.demo ? (
                                            <a
                                                target="_blank"
                                                key={project.demo}
                                                href={project.demo}
                                            >
                                                &#9656;
                                            </a>
                                        ) : (
                                            <></>
                                        )}

                                        <span className="project-type" key={project.type}>
                                            {project.type === "big"
                                                ? "big"
                                                : project.type === "medium"
                                                ? "med"
                                                : "mini"}{" "}
                                            <p key={project.type}>Project</p>
                                        </span>
                                        <p key={project.demo} className={project.demo ? "hasDemo" : ""}>
                                            {project.date}
                                        </p>
                                    </footer>
                                </div>
                            )
                        )}
                </section>
            </div>
            {/* <div>
                <h2 className='cascade'></h2>
            </div> */}
        </div>
    );
};

export default Gallery;
