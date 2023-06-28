export const Home = () => {
    return (
        <div className='flex justify-around mt-10 mb-20 ms-10'>
            
            <main className='w-1/2'>
                

                <div>
                    <h2 className='text-center my-10'>Choose the region</h2>

                    <nav>
                        <ul className='flex flex-wrap justify-around gap-7'>
                            {["bandle_city",
                                "bilgewater",
                                "demacia",
                                "iona",
                                "ixtal",
                                "noxus",
                                "piltover",
                                "shadow_isles",
                                "shurima",
                                "mt_targon",
                                "freljord",
                                "void",
                                "zaun"].map((region, key) => {
                                    let regionName: string = region;

                                    switch (regionName) {
                                        case "iona":
                                            regionName = "Ionia";
                                            break;
                                        case "mt_targon":
                                            regionName = "Targon";
                                            break;
                                        default:
                                            if (regionName.includes("_")) {
                                                let regionNameSplit = regionName.split("_");
                                                let regionNameSplitCapitalize = regionNameSplit.map(e => e.charAt(0).toUpperCase() + e.slice(1))
                                                regionName = regionNameSplitCapitalize.join(" ");
                                            }
                                            regionName = regionName.charAt(0).toUpperCase() + regionName.slice(1);
                                            break;
                                    }

                                    return <li key={key} className='chooseRegionLi cursor-pointer'>
                                        <figure className='flex flex-col'>
                                            <img className='regionIcon h-24 object-contain' src={`https://universe.leagueoflegends.com/images/${region}_crest_icon.png`} alt={`${regionName} Icon`} />
                                            <figcaption className='text-center my-2'>{regionName}</figcaption>
                                        </figure>
                                    </li>
                                })}
                        </ul>
                    </nav>
                </div>

            </main>

            <aside className='w-1/2 flex justify-center items-center'>
                <img style={{ filter: "drop-shadow(0 0 15px white)" }} src="https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt0a68023dc05d8abd/636c5f5fe7ed921098231e3f/11132022_WRNewsArticle_WildRiftNewsOlafPaintover.png" alt="Olaf" />
            </aside>
        </div>
    )
}