import HomeBanner from "./HomeBanner";
import HomeBannerAlt from "./HomeBannerAlt"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

/* Image assets */
import personal from "../assets/avatars/personal.png"
import tsbanner from "../assets/bgs/tsbanner.jpg"
import potrbanner from "../assets/bgs/potrbanner.jpg"
import sfsbanner from "../assets/bgs/sfsbanner.jpg"



export default function Home() {

    return (
        <>
            <main className="mx-4 my-2 leading-relaxed">
                <div className="flex items-center justify-center flex-row mb-20">
                    <div className="w-1/3">
                        <LazyLoadImage src={personal}
                            className="self-center"
                            alt="Cartoon stylized self portrait logo"
                        />
                    </div>
                    <div className="w-2/3">
                        <h1 className="text-xl mb-4 antialiased font-bold">Welcome!</h1>
                        <p>I'm Ishin. I enjoy wearing many hats. Lately, I've been wearing my Game Developer hat a lot, although in the past I've enjoyed
                            wearing my CS Education Researcher hat, Outreach Educator hat, and my Improviser hat.</p>
                        <p className="my-4">And yes, if you couldn't tell, Persona 5 is my favorite game.</p>
                    </div>
                </div>
                <Link
                    to="/towersong">
                    <HomeBanner
                        as={Link}
                        to="/towersong"
                        title="TOWER SONG"
                        langs="RPG Maker MZ, JavaScript"
                        subtitle="Strategic, turn-based RPG inspired by the classics. Early Access available on Steam!"
                        banner={tsbanner}
                    />
                </Link>

                <Link
                    to="/portraits">
                    <HomeBannerAlt
                        title="PORTRAITS OF THE RIM"
                        langs="Unity (Scripting), C#"
                        subtitle="A portrait generation mod for RimWorld. Available through the Steam Workshop!"
                        banner={potrbanner}
                    />
                </Link>

                <Link
                    to="/sfs">
                    <HomeBanner
                        title="SCIENCE FAIR SABOTAGE"
                        langs="Unity, C#"
                        subtitle='The point-and-click answer to "What can Ishin and 4 other people make at a Game Jam in 48 hours?"'
                        banner={sfsbanner}
                    />
                </Link>

            </main>
        </>
    )

}