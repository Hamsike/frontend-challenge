// components/CatGallery.tsx
import React, { useCallback, useRef, useEffect } from 'react';
import { useInfiniteCats } from '@/hooks/useCats';
import { CatCard } from '@/components/CatCard/CatCard'
import styles from './CatGallery.module.css'


const CatGallery: React.FC = () => {
  const {
    data,
    status,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteCats(15);

  const allCats = data?.pages.flatMap(page => page) || [];
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useCallback((node: HTMLDivElement | null) => {
    if (isFetchingNextPage) return;
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });
    
    if (node) {
      observerRef.current.observe(node);
    }
  }, [isFetchingNextPage, hasNextPage, fetchNextPage]);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  if (status === 'pending') {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}>🐱</div>
        <p>Загрузка котиков...</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className={styles.errorContainer}>
        <h2>😿 Ошибка загрузки</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.catsGrid}>
        {allCats.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>

      {hasNextPage && (
        <div 
          ref={loadMoreRef} 
          className={styles.loadMoreTrigger}
        >
          {isFetchingNextPage && (
            <div className={styles.loadingMore}>
              <div className={styles.smallLoader}>🐱</div>
              <p>Загружаем ещё котиков...</p>
            </div>
          )}
        </div>
      )}

      {!hasNextPage && allCats.length > 0 && (
        <div className={styles.endMessage}>
          <p>🎉 Вы посмотрели всех котиков! 🎉</p>
        </div>
      )}
    </div>
  );
};

export default CatGallery;