import './App.css'
import { useEffect, useState } from 'react'
import { PoroScroll } from './components/PoroScroll'
import { Home } from './components/Home'
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
      <div className='flex justify-around w-1/2 m-auto my-10'>
        <img className='w-20 aspect-square rounded drop-shadow-lg m-0' src={logo} alt="Howling Abyss Logo" />
        <h1 className='text-4xl drop-shadow-lg'>Welcome to <p className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600'>Howling Abyss</p></h1>
      </div>

      <Home />

      <div className='fixed bottom-0'>
        <PoroScroll />
      </div>
    </>
  )
}

export default App
