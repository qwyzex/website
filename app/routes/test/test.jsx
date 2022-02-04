import { redirect } from "remix";

export const loader = () => {
    return process.env.NODE_ENV === 'development' && redirect('/')
}

export default function Test() {
    return (
        <div>
            <h1>POST TEST</h1>
        </div>
    );
}
