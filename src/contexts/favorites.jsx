import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites"

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

//hook personalisado
export function useFavoriteContext() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  function addFavorites(newFavorite) {
    const repeatedFavorites = favorites.some(
      (item) => item.id === newFavorite.id
    );
    let newList = [...favorites];

    if (!repeatedFavorites) {
      newList.push(newFavorite);
      return setFavorites(newList);
    }

    newList = favorites.filter((fav) => fav.id !== newFavorite.id);
    return setFavorites(newList);
  }



  return {
    favorites,
    addFavorites,
  };
}
