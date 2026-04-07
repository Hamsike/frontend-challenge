import styles from "./Header.module.css"
import type { TabType } from "@/types/tab"

interface HeaderProps {
  tabActive: string
  handleChangeActive: (tab: TabType) => void
}

export const Header: React.FC<HeaderProps> = ({ tabActive, handleChangeActive }) => {

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
