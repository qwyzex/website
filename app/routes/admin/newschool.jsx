import { NavigateBackToAdmin } from "../admin";
import { db } from "~/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const NewSchool = () => {
    const schoolsRef = collection(db, "schools");
    const [submitting, setSubmitting] = useState(false);

    // values
    const [formNameValue, setFormNameValue] = useState("");
    const [formTierValue, setFormTierValue] = useState("");
    const [formDescriptionValue, setFormDescriptionValue] = useState("");
    const [formYearInValue, setFormYearInValue] = useState(null);
    const [formYearOutValue, setFormYearOutValue] = useState(null);

    async function handleSubmit(e) {
        await addDoc(schoolsRef, {
            name: formNameValue,
            tier: formTierValue,
            description: formDescriptionValue,
            yearIn: toString(formYearInValue),
            yearOut: formYearOutValue === null ? "Current" : toString(formYearOutValue),
        });

        setFormNameValue("");
        setFormTierValue("");
        setFormDescriptionValue("");
        setFormYearInValue("");
        setFormYearOutValue("");

        setSubmitting(false);
    }

    useEffect(() => {
        const tierOption = document.querySelector("#tierOption");
        setFormTierValue(tierOption.options[tierOption.selectedIndex].text);
    }, []);

    return (
        <div>
            <NavigateBackToAdmin />
            <hr />
            <h1>Post New School</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitting(true);
                    handleSubmit();
                }}
                id="schoolForm"
            >
                <div className="tier">
                    <label>TIER</label>
                    <select
                        id="tierOption"
                        onChange={(e) =>
                            setFormTierValue(
                                e.target.options[e.target.selectedIndex].text
                            )
                        }
                    >
                        <option value={"TK"}>TK</option>
                        <option value={"SD"}>SD</option>
                        <option value={"SMP"}>SMP</option>
                        <option value={"SMA"}>SMA</option>
                        <option value={"UNIV"}>UNIV</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="schoolName">NAME</label>
                    <input
                        name="name"
                        id="schoolName"
                        type="text"
                        placeholder="School Name"
                        value={formNameValue}
                        onChange={(e) => setFormNameValue(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="schoolDescription">DESCRIPTION</label>
                    <input
                        name="description"
                        id="schoolDescription"
                        type="text"
                        placeholder="Describe The School"
                        value={formDescriptionValue}
                        onChange={(e) => setFormDescriptionValue(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="schoolYearIn">Year In</label>
                    <input
                        name="yearIn"
                        id="schoolYearIn"
                        type="number"
                        placeholder="2k2X"
                        value={formYearInValue}
                        onChange={(e) => setFormYearInValue(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="schoolYearIn">Year Out</label>
                    <input
                        name="yearIn"
                        id="schoolYearIn"
                        type="number"
                        placeholder="2k2X"
                        value={formYearOutValue}
                        onChange={(e) => setFormYearOutValue(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">
                        {submitting ? "SUBMITTING..." : "SUBMIT"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewSchool;
