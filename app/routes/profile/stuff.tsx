import { setup } from "~/data/setup";
import stuffStyle from "~/styles/css/profile/stuff/stuff.css";
import RouteNav from "../../components/RouteNav";

export let links = () => {
    return [{ rel: "stylesheet", href: stuffStyle }];
};

export let meta = () => {
    return {
        title: "Stuff",
        description: "Things that I use...",
    };
};

export default function WIL() {
    return (
        <div>
            <RouteNav index={false} text="profile" />
            <h1>Stuff I Use</h1>
            <section className="stuff-container">
                <h3 className="cascade">// Hardware</h3>
                <ul>
                    <li>
                        <h3>{setup.laptop.name}</h3>
                        <img src={setup.laptop.img} alt="my-laptop" />
                        <p>{setup.laptop.desc}</p>
                    </li>
                    <li>
                        <h5>STUFF</h5>
                        <img />
                        <p>description</p>
                    </li>
                    <li>
                        <h5>STUFF</h5>
                        <img />
                        <p>description</p>
                    </li>
                    <li>
                        <h5>STUFF</h5>
                        <img />
                        <p>description</p>
                    </li>
                </ul>
            </section>
        </div>
    );
}
