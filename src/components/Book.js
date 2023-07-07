import React from 'react'
import '../styles/Books.css'
import bookcover from '../img/bookcover.jfif'

function Book({book}) {
  return (
    <div className='book'>
      <p> {book.volumeInfo.title}</p>
              <div>
                {book.volumeInfo.imageLinks?.thumbnail ? (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                ) : <img src={bookcover} alt='bookcover' />}
              </div>
             
    </div>

  )
}

export default Book
