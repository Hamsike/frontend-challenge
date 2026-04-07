// store/favouritesSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CatImage } from '@/types';

const loadFavouritesFromStorage = (): CatImage[] => {
  try {
    const saved = localStorage.getItem('cat-favourites');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Ошибка загрузки избранного:', error);
    return [];
  }
};

interface FavouritesSliceState {
  items: CatImage[];
}

const initialState: FavouritesSliceState = {
  items: loadFavouritesFromStorage(),
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<CatImage>) => {
      const exists = state.items.some(cat => cat.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem('cat-favourites', JSON.stringify(state.items));
      }
    },
    
    removeFavourite: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(cat => cat.id !== action.payload);
      localStorage.setItem('cat-favourites', JSON.stringify(state.items));
    },
    
    clearAllFavourites: (state) => {
      state.items = [];
      localStorage.setItem('cat-favourites', JSON.stringify(state.items));
    },
    
  },
});

export const {
  addFavourite,
  removeFavourite,
  clearAllFavourites,
} = favouritesSlice.actions;

export default favouritesSlice.reducer;
