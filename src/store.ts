import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from '@/slices/favouritesSlice'

const rootReducer = combineReducers({
  favorites: favoritesReducer
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
