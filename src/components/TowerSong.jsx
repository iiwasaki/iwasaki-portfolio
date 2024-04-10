
import { LazyLoadImage } from "react-lazy-load-image-component";

/* Image assets */
import deso_ss from "../assets/towersong/deso_ss.jpg";
import tali from "../assets/towersong/tali.jpg";
import tscover from "../assets/towersong/tscover.jpg";
import neat from "../assets/towersong/neat.jpg";




export default function TowerSong() {

    return (
        <>
            <main className="mx-4 my-8 leading-relaxed">
                <div className="flex flex-row md:gap-x-12 mb-4">
                    <div className="w-1/3 pr-8">
                        <h1 className="text-2xl md:text-3xl border-b-2 font-medium border-b-amber-400 text-right pr-4">
                            TOWER SONG
                        </h1>
                    </div>
                    <div className="w-2/3 pl-8">
                        <p className="text-sm md:text-base my-2">Tower Song, the first game I made with Omega Intertainment, is a strategic, turn-based RPG that blends modern design
                            considerations with the retro feel of classic JRPGs. What begins as a rescue mission for a lost sister
                            turns into an adventure to free your homeland and discover the secrets of the mysterious Towers that
                            affect the world. Choose your Tower Runner and stop the Tower Song!
                        </p>
                        <p className="text-sm md:text-base">Check out <a className="font-bold text-blue-700" target="_blank" href="https://store.steampowered.com/app/2336330/Tower_Song/">Tower Song on Steam!</a></p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="ml-4 md:w-1/3">
                        <h2 className="font-bold underline underline-offset-4 decoration-amber-400">Technologies Used</h2>
                        <p className="mb-4"> RPG Maker MZ, JavaScript, Steam API, Adobe Photoshop & Premiere Pro</p>
                        <h2 className="font-bold underline underline-offset-4 decoration-amber-400">Primary Responsibilities</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>Implementation of design document features to engine</li>
                            <li>Developing JS plugins to extend engine capabilities</li>
                            <li>Bug fixes and QA testing</li>
                            <li>Set up build and deploy pipeline for Steam</li>
                            <li>Performance analysis and optimizations</li>
                        </ul>
                        <h2 className="font-bold underline underline-offset-4 decoration-amber-400">Secondary Duties as Necessary</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>Combat and class design input</li>
                            <li>Map design and implementation</li>
                            <li>Storyboarded, recorded, edited a <a className="font-bold text-blue-700" href="https://www.youtube.com/watch?v=ElHrJxzgL2o" target="_blank">content update trailer</a></li>
                            <li>Monitor Steam discussion board for bugs and feedback</li>
                            <li>Showcase the game at conventions and expos</li>
                        </ul>
                    </div>
                    <div className="md:w-2/3">
                        {/*Images*/}
                        <div className="grid grid-cols-3 gap-1 justify-center px-4 ">
                            <a href={deso_ss} target="_blank" className="col-span-3">
                                <LazyLoadImage src={deso_ss}
                                    alt="Tower Song screenshot of party engaging in combat with a war machine."
                                />
                            </a>
                            <a href={tali} target="_blank">
                                <LazyLoadImage src={tali}
                                    className=""
                                    alt="Tower Song screenshot of front-view combat with Tali, a cosmic witch."
                                />
                            </a>
                            <a href={tscover} target="_blank">
                                <LazyLoadImage src={tscover}
                                    className=""
                                    alt="Tower Song cover image."
                                />
                            </a>
                            <a href={neat} target="_blank">
                                <LazyLoadImage src={neat}
                                    className=""
                                    alt="Tower Song screenshot front-view combat with Neat, a street fighter."
                                />
                            </a>

                        </div>
                    </div>
                </div>

            </main>
        </>
    )

}