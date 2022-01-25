import { Link } from "remix";

export default function RouteNav(props) {
    if (props.lvl === 3) {
        return <RouteNavThree index={props.index} text={props.text} />;
    } else {
        return (
            <RouteNavTwo index={props.index} custom={props.custom} text={props.text} />
        );
    }
}

export const RouteNavTwo = (props) => {
    return (
        <div className="route-nav">
            <Link to="/">Home</Link>
            &#9656;
            <a
                to={
                    props.index === true
                        ? ".."
                        : props.index === "custom"
                        ? props.custom
                        : "."
                }
            >
                {props.text}
            </a>
        </div>
    );
};

export const RouteNavThree = (props) => {
    return (
        <div className="route-nav">
            <Link to="/">HOME</Link>
            &#9656;
            <a href={props.index === true ? ".." : "."}>{props.text[0]}</a>
            &#9656;
            <a href={props.index === true ? "." : ".."}>{props.text[1]}</a>
        </div>
    );
};
