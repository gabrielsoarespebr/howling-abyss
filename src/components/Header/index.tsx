import React from 'react'
import logo from '../../assets/images/howlingAbyss.png'
import poppyGif from '../../assets/gifs/poppyGif.gif'
import ezrealGif from '../../assets/gifs/ezrealGif.gif'
import threshGif from '../../assets/gifs/threshGif.gif'
import azirGif from '../../assets/gifs/azirGif.gif'
import choGif from '../../assets/gifs/choGif.gif'

export const Header: React.FC<{ regionName: string }> = ({ regionName }) => {

    const regionMedia = {
        bandle_city: "https://media1.giphy.com/media/KFUo8aml7izqfnWNyt/giphy.gif?cid=ecf05e47ubp1xdyh6lg7f5918tkq1ebintm6fcnza5svx9y5&ep=v1_stickers_search&rid=giphy.gif",
        bilgewater: "https://media.giphy.com/media/xUOxfdXk1AHGzGotgI/giphy.gif",
        demacia: poppyGif,
        iona: "https://static.wikia.nocookie.net/leagueoflegends/images/c/c9/Yasuo_Render.png",
        ixtal: "https://media.tenor.com/XB-4oqXr0l0AAAAi/picking-leaves-malphite.gif",
        noxus: "https://media.tenor.com/MbvQsweF5PoAAAAi/leblanc-league-of-legends.gif",
        piltover: ezrealGif,
        shadow_isles: threshGif,
        shurima: azirGif,
        mt_targon: "https://media.tenor.com/FvafCqUONFUAAAAi/zoe-league-of-legends.gif",
        freljord: "https://static.wikia.nocookie.net/leagueoflegends/images/2/2d/Nunu_Render.png",
        void: choGif,
        zaun: "https://media.giphy.com/media/l1J9rCHY7XjENUMQo/giphy.gif",
        nowhere: "https://media.tenor.com/-O9a6WKx4uAAAAAj/league-of-legends-league-of-legends-alistar.gif"
    }

    const decodeRegionName = (regionName: string) => {
        let regionNameLocal: string = regionName
        switch (regionNameLocal) {
            case "iona":
                regionNameLocal = "Ionia";
                break;
            case "mt_targon":
                regionNameLocal = "Targon";
                break;
            default:
                if (regionNameLocal.includes("_")) {
                    let regionNameSplit = regionNameLocal.split("_");
                    let regionNameSplitCapitalize = regionNameSplit.map(e => e.charAt(0).toUpperCase() + e.slice(1))
                    regionNameLocal = regionNameSplitCapitalize.join(" ");
                }
                regionNameLocal = regionNameLocal.charAt(0).toUpperCase() + regionNameLocal.slice(1);
                break;
        }
        return regionNameLocal
    }

    return <header className='flex justify-around items-center w-1/2 m-auto my-10'>
        {(regionName == "Howling Abyss") ?
            <img className='w-20 aspect-square rounded drop-shadow-lg m-0' src={logo} alt="Howling Abyss Logo" />
            : <img style={{ width: "40%", aspectRatio: "1/1", objectFit: "contain", filter: "drop-shadow(0 0 15px white)" }} src={regionMedia[regionName]} alt="Region representative" />}
        <h1 className='text-4xl drop-shadow-lg'>Welcome to <p className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600'>{decodeRegionName(regionName)}</p></h1>
    </header>
}