import { Transition } from "@headlessui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftDialogue from "./LeftDialogue";
import LeftDialogueEnd from "./LeftDialogueEnd";
import RightDialogue from "./RightDialogue";

/* Image assets */
import personal from "../assets/avatars/personal.png"



export default function Home() {

    const [isShowing, setShowing] = useState(true)
    const navigate = useNavigate()

    function navToProjects() {
        setShowing(false)
        setTimeout(() => {
            navigate("/projects")
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
                <div className="w-3/4">
                    <LeftDialogue
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        offset_t={0}
                        offset_l="left-0"

                    />
                    <LeftDialogue
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        offset_t={1}
                        offset_l="left-6"
                    />
                    <LeftDialogueEnd
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        offset_t={2}
                        offset_l="left-0"
                    />
                </div>
            </Transition>
        </>
    )

}