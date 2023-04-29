import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Books = () => {
  const [books,setBooks] = useState([])
  useEffect(()=>{
    const fetchAllBooks = async()=>{
      try{
        const res = await axios.get("http://localhost:8800/books")
        setBooks(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchAllBooks()
  },[])

  const handleDelete = async(id)=>{
    try{
      const res = await axios.delete("http://localhost:8800/books/"+id)
      window.location.reload()
      setBooks(res.data);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      <Navigation />
      <h1 className='head' >Books</h1>
      <div className="books">
        {books.map(book=>(
          <div className="book" key={book.id}>
            <h2>{book.title}</h2>
            <h2>{book.cover}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>

            <button className="delete" onClick={()=>handleDelete(book.id)}>Delete</button>
            <button className="update"><Link to={`/update/${book.id}`}>Update</Link> </button>
          </div>
        ))}
      </div>
      <button className="linkB"><Link to="/add">Add New Book</Link></button>
    </div>
  )
}

export default Books
