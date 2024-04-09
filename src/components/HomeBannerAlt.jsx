

export default function HomeBannerAlt(props) {
    return (
        <>
            <div className="
                            before:block
                            before:absolute
                            before:skew-y-[2.25deg]
                            before:inset-0
                            before:z-10
                            before:bg-black
                            before:scale-x-[1.05]
                            before:scale-y-[1.7]
                            relative
                            mx-8
                            mb-32
                            md:mb-44
                            z-20
                            ">
                <div className="
                    before:block
                    before:absolute
                    before:skew-y-2
                    before:inset-0
                    before:z-10
                    before:bg-white
                    before:scale-x-[1.03]
                    before:scale-y-[1.3]
                    relative
                    z-30
                ">
                    <div className="
                        before:block
                        before:absolute
                        before:inset-0
                        before:z-10
                        before:skew-y-2
                        before:bg-amber-600
                        before:scale-x-[1.01]
                        before:scale-y-[1.08]
                        z-40
                        relative
                        
                    ">
                        <div className={`
                            py-2
                            px-4
                            min-h-[90px]
                            relative
                            skew-y-2
                            z-50
                            `}
                            style={{backgroundImage: `url(${props.banner})`}}
                            >
                            <h2 className="text-white text-right font-bold text-2xl md:text-7xl"> {props.title} </h2>
                            <p className="text-white text-right font-light md:font-medium text-xs mb-2 md:mx-2">{props.langs}</p>
                            <p className="text-white text-right font-light md:font-medium">{props.subtitle}</p>
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    )
}