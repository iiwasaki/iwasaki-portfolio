import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    {/* Could console log error here */}

    return (
        <div>
            {/* Navbar here */}
            <h1> Sorry, an error has occurred! </h1>
            <p>
                <i> {error.statusText || error.message}</i>
            </p>
        </div>
    )
}