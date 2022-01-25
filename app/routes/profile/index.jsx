import MoreOthers from "~/components/MoreOthers";
import moreOthersStyle from "~/styles/css/components/MoreOthers.css";
import profileStyle from "~/styles/css/profile/profile.css";

export let links = () => {
    return [
        { rel: "stylesheet", href: profileStyle },
        { rel: "stylesheet", href: moreOthersStyle },
    ];
};

export let meta = () => {
    return {
        title: "Profile",
        description: "Profile about the author.",
    };
};

const Profile = () => {
    const pfp = "/images/essentials/pfp4.jpg";

    const RandomDiv = () => {
        return <div className="randomDiv"></div>;
    };

    return (
        <div className="profile-container">
            <RandomDiv />
            <div className="pfp-container">
                <img src={pfp} alt="profile-picture" />
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <h1>About Me</h1>
            <p>
                My name is <x-acc>Ihsan Fashbir Danurrahardjo</x-acc>, my mate usually
                call me Ihsan. I am a web-developer from <x-acc>Indonesia</x-acc>.
            </p>
            <p>
                I love <x-acc>Math</x-acc>, Video Games, Design, Writing, Drawing
                (sketch), Video Editing, Movie and Music. I'm born at Metro, Lampung, on
                September 1st 2007. My hobbies and things that I love is frequently
                changes. Ranging from Art, Sports, Entertainment to Programming.
            </p>
            <p>
                Schools and private tutoring didn't really improve my English. In fact, I
                get almost of my English ability is from Video Games, Movies, Music and
                Memes. I also have a very high curiosity. Always want to know and explore
                something that I never discover before. I'm a bit popular at my Elementary
                School if I may say. I had a lotta friends there, competing in multiple
                Math's Olympic, had a good leadership skill.
            </p>
            <div className="custom-MoreOthers-wrapper">
                <MoreOthers
                    data={[
                        { name: "about", url: "about" },
                        { name: "skills", url: "skills" },
                        { name: "education", url: "education" },
                        { name: "actual stuff", url: "stuff" },
                    ]}
                />
            </div>
        </div>
    );
};

export default Profile;
