import { createContext, useContext, useState } from "react";


export const FavoritesContext = createContext();

export const FavoritesProvider = (({ children }) =>{
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
})

//hook personalisado
export function useFavoriteContext() {
    const {favorites, setFavorites} = useContext()

    function addFavorites(newFavorite){

        let newFavoriteList  = [...favorites]

        const repeatedFavorites = favorites.some((item)=>item.id === newFavorite   )

        if(!repeatedFavorites){
            newFavoriteList.push(newFavorite)
            return setFavorites(newFavorite)
        }

        newFavoriteList = favorites.filter((fav)=>fav.id === newFavorite.id)
        return( setFavorites(newFavoriteList))

    }

    return{
      favorites,
      addFavorites
    }
}
