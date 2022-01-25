import { Outlet, useLoaderData, Link } from "remix";
import { getPosts } from "~/post";

import adminStyle from "~/styles/css/admin/admin.css";
import accountPanelStyle from "~/styles/css/admin/AccountPanel.css";

export let loader = () => {
    return getPosts();
};

// init firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDeOFek1sX5uS1uiRvXkU-C21POOpmIZes",
    authDomain: "qwyzex-website.firebaseapp.com",
    projectId: "qwyzex-website",
    storageBucket: "qwyzex-website.appspot.com",
    messagingSenderId: "892362358997",
    appId: "1:892362358997:web:d58033ab6584a526a5625c",
    measurementId: "G-EDJENV6NDK",
};
export const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);

const Admin = () => {
    const [user] = useAuthState(auth);

    if (user) {
        return user.uid === "h8YwHiCjiTdVOXuaTyYhsImzJf82" ? (
            <div className="admin-container">
                <h1>ADMIN PAGE</h1>
                <AdminPanel>
                    <AccountPanel />
                </AdminPanel>
            </div>
        ) : (
            <div className="admin-container">
                <h1>NOT AUTHORIZED</h1>
                <AccountPanel />
            </div>
        );
    } else {
        return (
            <div className="admin-container">
                <AccountPanel />
            </div>
        );
    }
};

const AccountPanel = () => {
    const [user] = useAuthState(auth);

    function showUID() {
        let wrap = document.querySelector("#uid-wrapper");

        if (wrap.value === "****************************") {
            wrap.value = user.uid;
        } else {
            wrap.value = "****************************";
        }
    }

    const SignInButton = () => {
        function signInWithGoogle() {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider);
        }

        return (
            <button className="auth-button" onClick={signInWithGoogle}>
                Sign In
            </button>
        );
    };

    const SignOutButton = () => {
        function signOutConfirm() {
            if (confirm("Are You Sure You Want To Sign Out?")) {
                signOut(auth);
            } else {
            }
        }

        return (
            <button className="auth-button" onClick={signOutConfirm}>
                Sign Out
            </button>
        );
    };

    const NotAdminWarning = () => {
        return (
            <div className="not-admin-warning">
                <object data="/images/misc/warning-3.svg"></object>
                <div>
                    <h1>!ADMIN</h1>
                    <p>
                        You are not an admin, you can't modified nor posts anything from
                        here!
                    </p>
                </div>
            </div>
        );
    };

    if (user) {
        return (
            <div className="account-panel-container">
                <section>
                    <div className="user-pfp">
                        <img
                            src={user.photoURL}
                            alt={`${user.displayName}'s Profile Picture`}
                            title={`${user.displayName}'s Profile Picture`}
                        />
                    </div>
                    <div className="user-info">
                        <div className="username">
                            <label>LOGGED IN AS</label>{" "}
                            <p>
                                <x-remix>{user.displayName}</x-remix>
                            </p>
                        </div>
                        <div className="email">
                            <label>EMAIL</label>
                            <p>
                                <x-remix>{user.email}</x-remix>
                            </p>
                        </div>
                        <div className="uid-container">
                            <div className="uid-wrapper">
                                <label htmlFor="uid-wrapper">UID</label>
                                <input
                                    readOnly
                                    id="uid-wrapper"
                                    defaultValue="****************************"
                                />
                            </div>
                            <button onClick={showUID}>SHOW UID</button>
                        </div>
                    </div>
                </section>
                {user.uid === "h8YwHiCjiTdVOXuaTyYhsImzJf82" ? null : <NotAdminWarning />}
                <div className="buttons-wrapper">
                    <SignOutButton />
                    {user.uid === "h8YwHiCjiTdVOXuaTyYhsImzJf82" ? (
                        <button
                            className="hide-posts-list-button"
                            onClick={() => {
                                document
                                    .querySelector("#posts-list")
                                    .classList.toggle("closed");
                            }}
                        >
                            HIDE
                        </button>
                    ) : null}
                </div>
            </div>
        );
    } else {
        return (
            <div className="account-panel-container">
                <h1>NOT LOGGED IN</h1>
                <div className="buttons-wrapper">
                    <SignInButton />
                </div>
            </div>
        );
    }
};

const AdminPanel = ({ children }) => {
    let posts = useLoaderData();

    return (
        <div className="admin">
            <nav id="posts-list">
                <p>All Posts ({posts.length})</p>
                <ul>
                    {posts
                        .sort(function (a, b) {
                            return a.id - b.id;
                        })
                        .reverse()
                        .map((post) => (
                            <li key={post.slug}>
                                <Link to={`/posts/${post.slug}`}>{post.title}</Link>
                            </li>
                        ))}
                </ul>
            </nav>
            <main>
                {children}
                <Outlet />
            </main>
        </div>
    );
};

export function AdminHeaderLink() {
    const [user] = useAuthState(auth);

    if (user) {
        return user.uid === "h8YwHiCjiTdVOXuaTyYhsImzJf82" ? (
            <li className="nav-items">
                <Link to="/admin" className="essentials admin">
                    ADMIN
                </Link>
            </li>
        ) : null;
    } else {
        return null;
    }
}

export let links = () => {
    return [
        { rel: "stylesheet", href: adminStyle },
        { rel: "stylesheet", href: accountPanelStyle },
    ];
};

export let meta = () => {
    return {
        title: "Admin Page",
        description: "qwyzeX Admin Page",
    };
};

export default Admin;
