import { useAppSelector } from "@/hooks/redux"
import styles from './CatFavorites.module.css'
import { CatCard } from "../../components/CatCard/CatCard";

export const CatFavorites: React.FC = () => {
  const favorites = useAppSelector(state => state.favorites.items)
  
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.catsGrid}>
        {favorites.map((cat) => (
          <CatCard 
            key={cat.id} 
            cat={cat}
          />
        ))}
      </div>
      
      {favorites.length === 0 && (
        <div className={styles.emptyFavorites}>
          <div className={styles.emptyIcon}>😿</div>
          <h3>Нет избранных котиков</h3>
          <p>Добавьте котиков в избранное, нажав на сердечко 🐱</p>
        </div>
      )}
    </div>
  );
};