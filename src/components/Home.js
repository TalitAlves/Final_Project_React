import React, { useState } from 'react'
import '../styles/Home.css'
import bgbook from '../img/bg-books.webp'
import Books from './Books';

function Home({setSearchbook, apiResponse, addBooks}) {
  const [searchInput, setSearchInput] = useState('');
  const handleInput =(event)=>{
    setSearchInput(event.target.value);
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    setSearchbook(searchInput)

  }
  return (
    <div>
    <div style={{ backgroundImage: `url(${bgbook})` }} className='bg-books'>
      <div className='home-container'>
        <h1>"A book is a dream that you hold in your hands"</h1>
        <p>Neil Gaiman </p>

        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Search for a book' onChange={handleInput} />
            <button type="submit">Submit</button>
        </form>
      </div>

     
    </div>
    <Books apiResponse={apiResponse}  addBooks={addBooks}/>
    </div>
  )
}

export default Home
