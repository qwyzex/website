import skillsStyle from "~/styles/css/profile/skills/skills.css";
import { skillsQuery } from "~/data/skillsQuery";
import RouteNav from "../../components/RouteNav";

export let links = () => {
    return [{ rel: "stylesheet", href: skillsStyle }];
};

export let meta = () => {
    return {
        title: "Skills",
        description: "Skills I have.",
    };
};

const Skills = () => {
    return (
        <div className="skills-container">
            <RouteNav index={false} text="profile" />
            <article className="summary">
                <h1 className="skills-title">MY SKILLS</h1>
                <p>
                    Most of my "SKILLS" I put here is in technology or web development
                    category.
                </p>
            </article>
            <SkillsList />
            <SkillsToLearn />
            <SkillsGeneral />
        </div>
    );
};

// components
const SkillsList = () => {
    return (
        <div className="skills-list-container">
            <ul className="skills-list" id="skills">
                {skillsQuery.master.map((skill) => (
                    <li
                        className="skills-item"
                        key={skill.name}
                        style={{ background: skill.bg }}
                    >
                        <object
                            data={skill.img}
                            key={skill.img}
                            style={{ filter: skill.filter, "box-shadow": skill.shadow }}
                        ></object>
                        <p key={skill.name}>{skill.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const SkillsToLearn = () => {
    return (
        <div className="skills-to-learn-container">
            <h2>SKILLS TO LEARN</h2>
            <ul className="skills-to-learn" id="skills-to-learn">
                {skillsQuery.learn.map((skill) => (
                    <li key={skill.name} className={skill.better ? "better" : ""}>
                        <p key={skill.name}>{skill.name}</p>
                        <object key={skill.img} data={skill.img}></object>
                        <object
                            key={skill.img}
                            className="background"
                            data={skill.img}
                        ></object>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const SkillsGeneral = () => {
    return (
        <div className="non-tech-skills-container">
            <h2>NON-TECH GENERAL SKILLS</h2>
            <ul className="non-tech-skills">
                {skillsQuery.nonTech.map((skill) => (
                    <li key={skill.title} className="non-tech-skills-item">
                        <h4 key={skill.title}>{skill.title}</h4>
                        <p key={skill.desc}>{skill.desc}</p>
                    </li>
                ))}
                {/* <li className="non-tech-skills-item">
                    <h4>Draw (sketch)</h4>
                    <p>I hate coloring. That's it. I don't receive opinion.</p>
                </li> */}
            </ul>
        </div>
    );
};

export default Skills;
