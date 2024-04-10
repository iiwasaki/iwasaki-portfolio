
import { LazyLoadImage } from "react-lazy-load-image-component";

/* Image assets */
import sfs_1 from "../assets/sfs/sfs_1.jpg";
import sfs_2 from "../assets/sfs/sfs_2.jpg";
import sfs_cover from "../assets/sfs/sfs_cover.jpg";
import sfs_3 from "../assets/sfs/sfs_3.jpg";




export default function SFSabotage() {

    return (
        <>
            <main className="mx-4 my-8 leading-relaxed">
                <div className="flex flex-row md:gap-x-12 mb-4">
                    <div className="w-1/3 pr-8">
                        <h1 className="text-2xl md:text-3xl border-b-2 font-medium border-b-amber-400 text-right pr-4">
                            SCIENCE FAIR SABOTAGE
                        </h1>
                    </div>
                    <div className="w-2/3 pl-8">
                        <p className="text-sm md:text-base my-2">Science Fair Sabotage is a point-and-click puzzle game presented as a visual novel. You have one simple task: combine the various things around you in your
                            magical backpack to create something to sabotage snobby James Worthmore's science projects all throughout his life.
                        </p>
                        <p className="text-sm md:text-base my-2">This "game" (if you could even permit me to call it that) was a creation born from 48 hours of design and programming as part of the Seattle Indies Game Jam 2019.
                            I was part of a team with an artist, two composers, and another writer/programmer, and the five of us had a lot of fun making this little thing. </p>
                        <p> Is it a good game? No. Will I keep this on my portfolio
                            forever, even if I go on to make bigger and better games? You bet. Never forget where you came from. SFS is available to play
                            <a className="font-bold text-blue-700" target="_blank" href="https://iiwasaki.itch.io/science-fair-sabotage"> here on itch.io</a>!</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="ml-4 md:w-1/3">
                        <h2 className="font-bold underline underline-offset-4 decoration-amber-400">Technologies Used</h2>
                        <p className="mb-4"> Unity (Editor and Scripting), C#</p>
                        <h2 className="font-bold underline underline-offset-4 decoration-amber-400">Primary Responsibilities</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>Game and system design</li>
                            <li>Implementation and programming</li>
                        </ul>

                    </div>
                    <div className="md:w-2/3">
                        {/*Images*/}
                        <div className="grid grid-cols-3 gap-1 justify-center items-center px-4 ">
                            <a href={sfs_1} target="_blank" className="col-span-3">
                                <LazyLoadImage src={sfs_1}
                                    alt="A screenshot of a colonist's portrait in Rimworld."
                                />
                            </a>
                            <a href={sfs_2} target="_blank">
                                <LazyLoadImage src={sfs_2}
                                    className=""
                                    alt="A collage of some of the portraits possible through Portraits of the Rim."
                                />
                            </a>
                            <a href={sfs_cover} target="_blank">
                                <LazyLoadImage src={sfs_cover}
                                    className=""
                                    alt="Portraits of the Rim cover image."
                                />
                            </a>
                            <a href={sfs_3} target="_blank">
                                <LazyLoadImage src={sfs_3}
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