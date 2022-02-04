import { Link } from "remix";

export interface RouteNavProps {
    lvl?: number;
    index?: boolean | string;
    custom?: any;
    text: string | Array<string>;
}

export default function RouteNav(props: RouteNavProps) {
    if (props.lvl === 3) {
        return <RouteNavThree index={props.index} text={props.text} />;
    } else {
        return (
            <RouteNavTwo index={props.index} custom={props.custom} text={props.text} />
        );
    }
}

export const RouteNavTwo = (props: RouteNavProps) => {
    return (
        <div className="route-nav">
            <Link to="/">Home</Link>
            &#9656;
            <a
                href={
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

export const RouteNavThree = (props: RouteNavProps) => {
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
