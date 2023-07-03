import React from 'react'
import logo from '../../assets/images/howlingAbyss.png'
import poppyGif from '../../assets/gifs/poppyGif.gif'
import malphiteGif from '../../assets/gifs/malphiteGif.gif'
import ezrealGif from '../../assets/gifs/ezrealGif.gif'
import threshGif from '../../assets/gifs/threshGif.gif'

export const Header: React.FC<{ regionName: string }> = ({ regionName }) => {

    const regionMedia = {
        bandle_city: "https://media1.giphy.com/media/KFUo8aml7izqfnWNyt/giphy.gif?cid=ecf05e47ubp1xdyh6lg7f5918tkq1ebintm6fcnza5svx9y5&ep=v1_stickers_search&rid=giphy.gif",
        bilgewater: "https://media.giphy.com/media/xUOxfdXk1AHGzGotgI/giphy.gif",
        demacia: poppyGif,
        iona: "https://media.tenor.com/F-93sYJ4wlgAAAAi/markazushi.gif",
        ixtal: malphiteGif,
        noxus: "https://media.tenor.com/MbvQsweF5PoAAAAi/leblanc-league-of-legends.gif",
        piltover: ezrealGif,
        shadow_isles: threshGif,
        mt_targon: "https://media.tenor.com/FvafCqUONFUAAAAi/zoe-league-of-legends.gif"
    }

    return <header className='flex justify-around items-center w-1/2 m-auto my-10'>
        {(regionName == "Howling Abyss") ? <img className='w-20 aspect-square rounded drop-shadow-lg m-0' src={logo} alt="Howling Abyss Logo" /> : <img style={{ width: "40%", aspectRatio: "1/1", objectFit: "contain", filter: "drop-shadow(0 0 15px white)" }} src={regionMedia[regionName]} alt="Region representative" />}
        <h1 className='text-4xl drop-shadow-lg'>Welcome to <p className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600'>{regionName}</p></h1>
    </header>
}