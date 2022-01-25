import contactStyle from "~/styles/css/contact/contact.css";
import { useForm } from "@formspree/react";
import { formspreeKey } from "~/routes/private/vars";

export let links = () => {
    return [{ rel: "stylesheet", href: contactStyle }];
};

export let meta = () => {
    return {
        title: "Contact",
        description: "Contact qwyzeX trough email and other social platforms!",
    };
};

// main components
const Contact = () => {
    return (
        <div className="contact-parrent">
            <h1>CONTACT ME!</h1>
            <ContactForm />
        </div>
    );
};

// form
const ContactForm = () => {
    const [state, handleSubmit] = useForm(formspreeKey);

    // show status function
    function showStatus() {
        document.querySelector("#msgStatus").classList.add("show");
    }

    // status
    const FormStatus = () => {
        if (state.succeeded) {
            document.querySelector("#contact-form").reset();
        }

        const cls = state.succeeded
            ? "show success"
            : state.submitting
            ? "show pending"
            : "error";

        const Content = () => {
            if (state.succeeded) {
                return <p>SUCCESS!</p>;
            } else if (state.submitting) {
                return <p>SUBMITTING...</p>;
            } else {
                return <p>ERROR</p>;
            }
        };

        return (
            <div id="msgStatus" className={cls}>
                <Content />
            </div>
        );
    };

    // form
    return (
        <div className="contact-container">
            <form onSubmit={handleSubmit} id="contact-form" autoComplete="off">
                {/* name */}
                <div className="name">
                    <label htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        type="name"
                        name="name"
                        placeholder="gemme ur name"
                        required
                    />
                </div>

                {/* email */}
                <div className="email">
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="joe@something.idk"
                        autoComplete="on"
                        required
                        //
                    />
                </div>

                {/* subject */}
                <div className="subject">
                    <label htmlFor="subject">The Subject</label>
                    <input
                        id="subject"
                        type="subject"
                        name="subject"
                        placeholder="Title"
                    />
                </div>

                {/* message */}
                <div className="message">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Put your message here..."
                        required
                    />
                </div>

                {/* submit */}
                <div className="submit">
                    <button
                        type="submit"
                        disabled={state.submitting}
                        onClick={showStatus}
                    >
                        SEND MESSAGE
                    </button>
                    <FormStatus />
                </div>
            </form>
            <ContactInfo />
        </div>
    );
};

// info components
const ContactInfo = () => {
    return (
        <div className="contact-info">
            <article>
                <h2>INFORMATION</h2>
                <p>
                    Manually contact me here! Actually, I don't really active on social
                    media. But you can try!
                </p>
            </article>
            <ul className="contacts">
                <li>
                    <img src="/images/misc/contact.png" />
                    qwyzex@yandex.com
                </li>
                <li>
                    <img src="/images/misc/phone.png" />
                    +62 822-8101-9574
                </li>
            </ul>
            <ul className="socials">
                <li>
                    <a href="https://instagram.com/qwyzex" target="_blank">
                        <img src="/images/misc/instagram.png" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/qwyzex" target="_blank">
                        <img src="/images/misc/twitter.png" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
