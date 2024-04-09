import { useState, Fragment } from 'react'
import { Popover, Transition } from "@headlessui/react"
import { usePopper } from 'react-popper'
import { Bars3Icon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"
import resume from "../assets/iiwasaki_resume.pdf"

export default function Navbar() {
    let [reference, setReference] = useState()
    let [popMenu, setPopMenu] = useState()
    let { styles, attributes } = usePopper(reference, popMenu)
    return (
        <Popover as="nav" className="flex justify-between items-center md:items-baseline m-4 md:mx-8 2xl:mx-0">
            <Popover.Button className="md:hidden" ref={setReference}><Bars3Icon className="ml-auto h-10 w-10 mb-2" /></Popover.Button>
            <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Popover.Panel
                    className="bg-slate-800 text-white w-screen shadow-lg text-center z-20"
                    ref={setPopMenu}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    <div className="flex flex-col text-lg font-light tracking-wide p-2">
                        <Popover.Button as={Link} to="/" className="py-3">HOME</Popover.Button>
                        <Popover.Button as={Link} to="/towersong" className="py-3">TOWER SONG</Popover.Button>
                        <Popover.Button as={Link} to="/potr" className="py-3">PORTRAITS</Popover.Button>
                        <Popover.Button as={Link} to="/sfsabotage" className="py-3">SF SABOTAGE</Popover.Button>
                        {/*<Popover.Button as={Link} to="/intertwined" className="py-3">INTERTWINED</Popover.Button>*/}
                        <Popover.Button as={Link} to="/publications" className="py-3">PUBLICATIONS</Popover.Button>
                        <Popover.Button as={"a"} href={resume} target="_blank" className="py-3">RESUME (PDF)</Popover.Button>
                    </div>
                </Popover.Panel>
            </Transition>
            <div className="hidden md:flex gap-1 tracking-widest font-light">
                <Link to="/" className= "rounded-sm px-4 py-1 text-slate">HOME</Link>
                <Link to="/towersong" className= "rounded-sm px-4 py-1 text-slate">TOWER SONG</Link>
                <Link to="/potr" className="rounded-sm px-4 py-1 text-slate">PORTRAITS</Link>
                <Link to="/sfsabotage" className="rounded-sm px-4 py-1 text-slate">SF SABOTAGE</Link>
                {/*<Link to="/intertwined" className="rounded-sm px-4 py-1 text-slate">INTERTWINED</Link>*/}
                <Link to="/publications" className="rounded-sm px-4 py-1 text-slate">PUBLICATIONS</Link>
                <a href={resume} target="_blank" className="rounded-sm px-4 py-1 text-slate">RESUME (PDF)</a>
            </div>
        </Popover>
    )
}