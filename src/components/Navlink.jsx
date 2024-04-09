import { Link} from "react-router-dom";

export default function Navlink({dest, tag}){
    return (
        <Link to={dest}>
            <span className="relative">
                <span className="block absolute -inset-2 -skew-y-3 bg-blue-500 aria-hidden"></span>
                <span className="relative text-white font-bold uppercase text-shadow shadow-black">{tag}</span>
            </span>    
        </Link>
    )
}