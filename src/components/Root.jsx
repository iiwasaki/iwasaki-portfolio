import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Root() {
    return (
            <div className="min-h-screen flex flex-col mx-auto md:max-w-screen-xl font-sans -z-10 bg-white">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}