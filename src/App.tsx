import './App.css'
import { useEffect, useState } from 'react'
import { PoroScroll } from './components/PoroScroll'
import logo from './assets/images/howlingAbyss.png'

function App() {

  const [championListInitial, setChampionListInitial] = useState({})

  const fetchData = async () => {
    try {
      const response = await fetch('http://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json');
      const responseJson = await response.json();
      setChampionListInitial(responseJson)
    }
    catch (error) {
      console.error('O fetch falhou:', error);
    }
  }

  useEffect(() => { fetchData() }, [])

  useEffect(() => {
    console.log(championListInitial);
  }, [championListInitial])

  return (
    <>
      <div className='flex justify-around mt-10 mb-20 ms-10'>
        <main className='w-1/2'>
          <div className='flex justify-center items-center gap-3 mb-12'>
            <img className='w-20 aspect-square rounded m-auto drop-shadow-lg m-0' src={logo} alt="Howling Abyss Logo" />
            <h1 className='text-3xl drop-shadow-lg'>Welcome to <p className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600'>Howling Abyss</p></h1>
          </div>

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
      <div className='fixed bottom-0'>
        <PoroScroll />
      </div>
    </>
  )
}

export default App
