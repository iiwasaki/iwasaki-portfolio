import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <main className=" mx-auto md:max-w-screen-lg font-sans">
            <Outlet />
        </main>
    )
}