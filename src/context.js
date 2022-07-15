import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setloading]=useState(false)
  const [searchterm,setsearchterm]=useState('z')
  const [cocktails,setcocktails]=useState([])


  const fetchdrinks=useCallback(async()=>{
    setloading(true)
    try {
      const response = await fetch(`${url}${searchterm}`)
      const data = await response.json()
      const { drinks } = data
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setcocktails(newCocktails)
         
      } else {
        setcocktails([])
      }
      setloading(false)
    }
        catch(error){
      console.log(error)
    }
  } ,[searchterm])



  useEffect(()=>{
    fetchdrinks()

  },[searchterm,fetchdrinks])





  return <AppContext.Provider value={{loading,setsearchterm,cocktails}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
