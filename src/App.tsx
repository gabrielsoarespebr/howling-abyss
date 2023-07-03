import './App.css'
import { useEffect, useState } from 'react'
import { PoroScroll } from './components/PoroScroll'
import { Home } from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Region } from './components/Region'

function App() {

  const [championListInitial, setChampionListInitial] = useState({})

  const fetchData = async () => {
    try {
      const response = await fetch('http://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json');
      const responseJson = await response.json();
      setChampionListInitial(responseJson)
    }
    catch (error) {
      console.error('Houve falha na requisição dos dados:', error);
    }
  }

  useEffect(() => { fetchData() }, [])

  // useEffect(() => {
  //   console.log(championListInitial);
  // }, [championListInitial])

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/region' element={<Region />} />
      </Routes>

      <a href="https://github.com/gabrielsoarespebr" target='_blank'>
        <footer className='flex justify-center gap-2 my-20 drop-shadow-md md:opacity-40 hover:opacity-100 duration-700'>
          <img className='w-20 rounded-full' src="https://static.wikia.nocookie.net/leagueoflegends/images/1/16/Doom_Icon_of_Doom_profileicon.png" alt="Ziggs Icon" />
          <div className='flex flex-col justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400'>
            <p>Developed by <span className='text-fuchsia-400'>Gabriel Soares</span></p>
            <p className='text-xs'>How about to play ARAM together?</p>
            <p className='text-xs'>Invite me: <span className='text-fuchsia-400'>Russo Russiere</span></p>
          </div>
        </footer>
      </a>

      <div className='fixed bottom-0'>
        <PoroScroll />
      </div>

    </BrowserRouter>
  )
}

export default App
