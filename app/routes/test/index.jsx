// import { redirect } from "remix";

export const loader = () => {
    const status = process.env.NODE_ENV

    return status === 'development' && new Error('You Have No Permission To Access This Page')
}

export default function TestApp() {
    return <div></div>
}
