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

  useEffect(() => {
    console.log(championListInitial);
  }, [championListInitial])

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/region' element={<Region />} />
      </Routes>

      <div className='fixed bottom-0'>
        <PoroScroll />
      </div>

    </BrowserRouter>
  )
}

export default App
