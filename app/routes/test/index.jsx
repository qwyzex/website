import { redirect } from "remix";

export default function testApp() {
    return () => {
        throw new Error();
    };
    // return process.env.NODE_ENV === "development"
    //     ? redirect("/")
    //     : () => {
    //           throw new Error();
    //       };
}

export function ErrorBoundary({ error }) {
    console.error(error);
    return (
        <div>
            <h1>NO PERMISSION</h1>
        </div>
    );
}
