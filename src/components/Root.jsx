import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <main className="border-blue-600 border mx-auto md:max-w-screen-lg">
            <Outlet />
        </main>
    )
}