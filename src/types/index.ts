export interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: Breed[];
}

export interface Breed {
  id: string;
  name: string;
  temperament: string;
}

export interface FavouritesState {
  items: CatImage[];
}