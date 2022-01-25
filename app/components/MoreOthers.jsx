import { Link } from "remix";

export default function MoreOthers(props) {
    return (
        <div className="more-others">
            <h2>OTHER STUFF</h2>
            <hr />
            <div className="other-subcontainer">
                {props.data.map((x) => (
                    <Link key={x.url} to={x.url}>
                        {x.name.toLowerCase().replace(/ /g, "_")}
                    </Link>
                ))}
            </div>
        </div>
    );
}
