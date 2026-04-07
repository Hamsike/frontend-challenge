import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import styles from "./Header.module.css"
import type { TabType } from "@/types/tab"
import { setActiveTab } from "@/slices/tabSlice"

export const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const tabActive = useAppSelector(state => state.tab.activeTab)

  const handleChangeActive = (tab: TabType) => {
    dispatch(setActiveTab(tab))
  }

  return (
    <div className={styles.header}>
      <button 
        className={`${styles.button} ${styles.main} ${tabActive === 'all' ? styles.active: ''}`} 
        onClick={() => handleChangeActive('all')}
      >
        <span>Все котики</span>
      </button>
      <button 
        className={`${styles.button} ${styles.favorites} ${tabActive === 'favourites' ? styles.active : ''}`}
        onClick={() => handleChangeActive('favourites')}
        >
        <span>Любимые котики</span>
      </button>
    </div>
  )
}
