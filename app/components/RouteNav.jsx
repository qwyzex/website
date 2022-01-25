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
            <a href="/">Home</a>
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

export const RouteNavThree = (props) => {
    return (
        <div className="route-nav">
            <a href="/">HOME</a>
            &#9656;
            <a href={props.index === true ? ".." : "."}>{props.text[0]}</a>
            &#9656;
            <a href={props.index === true ? "." : ".."}>{props.text[1]}</a>
        </div>
    );
};
