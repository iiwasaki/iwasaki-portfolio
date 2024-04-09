import Navlink from "./Navlink"

export default function NavigationBubble(){
    return(
        <>
            <div className="
                            before:block
                            before:absolute
                            before:rounded-2xl
                            before:-top-1.5
                            before:bottom-0
                            before:-left-1
                            before:-right-0
                            before:-z-10
                            before:bg-blue-600
                            border-2
                            relative
                            border-blue-500
                            bg-white
                            rounded-2xl
                            my-4
                            px-8
                            py-4">
                <div>
                    <p className="mb-4"> Tell me about... </p>
                    <nav className="flex gap-4">
                        <Navlink dest="/projects" tag="Projects"/>
                    </nav>
                </div>
            </div>
        </>
    )
}