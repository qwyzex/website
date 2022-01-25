import { Link } from "remix";

export default function AdminIndex() {
    return (
        <ul className="admin-action-list">
            <h1>ACTIONS</h1>
            <li>
                <Link to="./newpost">CREATE NEW POST</Link>
            </li>
            <li>
                <a href="https://github.com/qwyzex/website" target="_blank">
                    REPOSITORY
                </a>
            </li>
            <li>
                <a
                    href="https://console.firebase.google.com/u/0/project/qwyzex/website"
                    target="_blank"
                >
                    FIREBASE CONSOLE
                </a>
            </li>
        </ul>
    );
}
