import contactStyle from "~/styles/css/contact/contact.css";
import {useForm} from '@formspree/react';
import { formspreeKey } from "~/routes/private/vars";

import { MetaFunction, LinksFunction } from "remix";

export let links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: contactStyle }];
};

export let meta: MetaFunction = () => {
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
            <div className="dummy"></div>
            <ContactForm />
        </div>
    );
};

// form
const ContactForm = () => {
    const [state, handleSubmit]: any = useForm(formspreeKey);

    const   submitting = state.submitting, 
            success = state.succeeded,
            err = state.errors;

    // status
    const FormStatus = () => {
        if (state.succeeded) {
            // @ts-ignore
            document.querySelector("#contact-form").reset();
        }

        return (
            <div
                id="msgStatus"
                className={
                    success
                        ? "show success"
                        : submitting
                        ? "show pending"
                        : "error"
                }
            >
                <p>
                    {success
                        ? "SUCCESS"
                        : submitting
                        ? "SUBMITTING..."
                        : "ERROR"}
                </p>
            </div>
        );
    };

    // form
    return (
        <div className="contact-container">
            <form onSubmit={handleSubmit} id="contact-form" autoComplete="off">
                {/* name */}
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="name"
                        name="name"
                        placeholder="Your Name"
                        required
                    />
                </div>

                {/* email */}
                <div className="email">
                    <label htmlFor="email">Email</label>
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
                    <label htmlFor="subject">Subject</label>
                    <input
                        id="subject"
                        type="subject"
                        name="subject"
                        placeholder="Title"
                    />
                </div>

                {/* message */}
                <div className="message">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Type your message here..."
                        required
                    />
                </div>

                {/* submit */}
                <div className="submit">
                    <button
                        type="submit"
                        disabled={state.submitting}
                        // @ts-ignore
                        onClick={() => document.querySelector("#msgStatus").classList.add("show")}
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
