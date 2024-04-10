import { LazyLoadImage } from "react-lazy-load-image-component";

/* Image assets */
import portrait_1 from "../assets/potr/portrait_1.jpg";
import portrait_2 from "../assets/potr/portrait_2.jpg";
import potr_cover from "../assets/potr/potr_cover.jpg";
import potr_progression from "../assets/potr/potr_progression.jpg";




export default function Portraits() {

    return (
        <>
            <main className="mx-4 my-8 leading-relaxed">
                <div className="flex flex-row md:gap-x-12 mb-4">
                    <div className="w-1/3 pr-8">
                        <h1 className="text-2xl md:text-3xl border-b-2 font-medium border-b-amber-400 text-right pr-4">
                            PORTRAITS OF THE RIM
                        </h1>
                    </div>
                    <div className="w-2/3 pl-8">
                        <p className="text-sm md:text-base my-2">Portraits of the Rim is a dynamic portrait generation mod for Rimworld, a popular colony management game. The mod takes the properties of a pawn in the game and puts together
                            a portrait of that pawn using hand-drawn assets from TwoPennyDoodle, the artist for the mod. PotR currently has about 19,000 active subscribers to the mod, and is
                            <a className="font-bold text-blue-700" target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2937991425"> available through the Steam workshop</a>!
                        </p>
                        <p className="text-sm md:text-base">Portraits of the Rim was initially created through a collaboration between
                            <a className="font-bold text-blue-700" target="_blank" href="https://www.twopennydoodle.com"> TwoPennyDoodle</a> and
                            <a className="font-bold text-blue-700" target="_blank" href="https://www.github.com/taranchuk"> Taranchuk</a>, the original programmer for the mod. As Portraits of the Rim gained
                            traction in the community and desire for additional support for hairs, apparrel, and xenotypes from other community mods increased, I took on the job of maintaining the mod.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="ml-4 md:w-1/3">
                        <h2 className="font-bold underline underline-offset-4 decoration-amber-400">Technologies Used</h2>
                        <p className="mb-4"> Unity (Scripting), C#</p>
                        <h2 className="font-bold underline underline-offset-4 decoration-amber-400">Primary Responsibilities</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>Update source code to add compatibilities for additional mods</li>
                            <li>Fix bugs</li>
                            <li>Optimize the portrait texture matching algorithm to improve performance</li>
                            <li>Monitor the Steam discussion board for bugs and status updates</li>
                        </ul>

                    </div>
                    <div className="md:w-2/3">
                        {/*Images*/}
                        <div className="grid grid-cols-3 gap-1 justify-center items-center px-4 ">
                            <a href={portrait_1} target="_blank" className="col-span-3">
                                <LazyLoadImage src={portrait_1}
                                    alt="A screenshot of a colonist's portrait in Rimworld."
                                />
                            </a>
                            <a href={portrait_2} target="_blank">
                                <LazyLoadImage src={portrait_2}
                                    className=""
                                    alt="A collage of some of the portraits possible through Portraits of the Rim."
                                />
                            </a>
                            <a href={potr_cover} target="_blank">
                                <LazyLoadImage src={potr_cover}
                                    className=""
                                    alt="Portraits of the Rim cover image."
                                />
                            </a>
                            <a href={potr_progression} target="_blank">
                                <LazyLoadImage src={potr_progression}
                                    className=""
                                    alt="A sequence of portraits across age brackets for this colonist."
                                />
                            </a>

                        </div>
                    </div>
                </div>

            </main>
        </>
    )

}