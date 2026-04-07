import { useState } from 'react'
import './App.css'
import { CatFavorites } from './components/CatFavorites/CatFavorites'
import CatGallery from './components/CatGallery/CatGallery'
import { Header } from './components/Header/Header'
import type { TabType } from './types/tab'

function App() {
  const [active, setActive] = useState<TabType>('all')
  return (
    <>
      <Header tabActive={active} handleChangeActive={setActive}/>
      {active === 'all' ? <CatGallery/> : <CatFavorites/>}
    </>
  )
}

export default App
