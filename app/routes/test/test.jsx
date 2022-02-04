import { useEffect } from "react";
import testApp from ".";

export default function Test() {
    useEffect(() => {
        testApp();
    }, []);

    return (
        <div>
            <h1>POST TEST</h1>
        </div>
    );
}
