import React, { useState } from 'react'
import Books from './Books';

function FilterBook({language, setLanguage, apiResponse, addBooks, setSearchbook }) {
const [category, setCategory] = useState("romance")    

// const handleInput=(event)=>{
//     setCategory(event.target.value)
   
// }
// const handleClick =(event) =>{
//     setSearchbook(category)
// }

const categoryTranslations = [
    { english: "Art", spanish: "Arte" },
    { english: "Biography & Autobiography", spanish: "Biografía y Autobiografía" },
    { english: "Business & Economics", spanish: "Negocios y Economía" },
    { english: "Computers", spanish: "Computadoras" },
    { english: "Cooking", spanish: "Cocina" },
    { english: "Fiction", spanish: "Ficción" },
    { english: "History", spanish: "Historia" },
    { english: "Health & Fitness", spanish: "Salud y Fitness" },
    { english: "Children's Literature", spanish: "Literatura Infantil" },
    { english: "Mystery & Suspense", spanish: "Misterio y Suspenso" },
    { english: "Poetry", spanish: "Poesía" },
    { english: "Politics & Social Sciences", spanish: "Política y Ciencias Sociales" },
    { english: "Religion", spanish: "Religión" },
    { english: "Romance", spanish: "Romance" },
    { english: "Science", spanish: "Ciencia" },
    { english: "Science Fiction", spanish: "Ciencia Ficción" },
    { english: "Sports", spanish: "Deportes" },
    { english: "Travel", spanish: "Viajes" }
  ];

     return (
    <div>
   
    <select value={language}  onChange={(event)=>{
        setLanguage(event.target.value)
    }}>
        <option value="es">es</option>
        <option value="en">en</option>

    </select>

    <select value={category} onChange={(event)=>{
        setSearchbook(`subject:${event.target.value}`)
        setCategory(event.target.value)
    }}>
        {categoryTranslations.map((category)=>{
          if(language === "es"){
            
            return(
                <option value={category.spanish}>{category.spanish}</option>
            )
          } else {
            return  <option value={category.english}>{category.english}</option>
          }
        })}
    </select>

    
    
    <Books apiResponse={apiResponse}  addBooks={addBooks}/>     
    </div>
  )
}

export default FilterBook
