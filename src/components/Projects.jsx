import { Transition } from "@headlessui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Projects() {

    const [isShowing, setShowing] = useState(true)
    const navigate = useNavigate()

    function navToHome() {
        setShowing(false)
        setTimeout(() => {
            navigate("/")
        }, 1000)
    }

    return (
        <>
            <Transition
                appear={true}
                show={isShowing}
                enter="transition-opacity duration-[5000ms]"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-[750ms]"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >

                <div className="w-[500px] h-[500px] bg-blue-600" onClick={navToHome}></div>

            </Transition>
        </>
    )

}