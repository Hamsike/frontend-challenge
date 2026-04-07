import './App.css'
import { CatFavorites } from './components/CatFavorites/CatFavorites'
import CatGallery from './components/CatGallery/CatGallery'
import { Header } from './components/Header/Header'
import { useAppSelector } from './hooks/redux'

function App() {
  const tabActive = useAppSelector(state => state.tab.activeTab)

  return (
    <>
      <Header/>
      {tabActive === 'all' ? <CatGallery/> : <CatFavorites/>}
    </>
  )
}

export default App
