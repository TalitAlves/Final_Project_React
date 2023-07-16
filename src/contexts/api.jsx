import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ApiContext = createContext()

const API_KEY = `AIzaSyBGxIuI-3_Ft83HA5HWqEiwEnyj25fEnpA`;

export const ApiContextProvider = (({children}) =>{
    const [searchBook, setSearchbook] = useState("romance");
    const [apiResponse, setApiResponse] = useState([]);
    const [language, setLanguage] = useState("es");
    const [maxResults, setMaxResults] = useState(10);


    useEffect(() => {
        axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchBook}&langRestrict=${language}
          &maxResults=${maxResults}&orderBy=newest&key=${API_KEY}`
        )
          .then((response) => {
              
            setApiResponse(response.data.items);
          })
          .catch((error) => {});
      }, [searchBook, language, maxResults]);

      const addBooks = () => {
        if (maxResults <= 100) {
          setMaxResults(maxResults + 5);
        }
      };

      return (
        <ApiContext.Provider value={{apiResponse, addBooks, setSearchbook, setLanguage, language, searchBook}}>
            {children}
        </ApiContext.Provider>
      )
}) 