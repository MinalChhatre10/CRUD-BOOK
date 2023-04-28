
import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UpdateBooks = () => {
  const [book,setBook] = useState({
    title:"",
    desc:"",
    price:null,
    cover:"",
  });

  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const handleChange = async e =>{
    setBook(prev=>({...prev , [e.target.name]: e.target.value}))
  };
  const handleClick = async e =>{
      e.preventDefault()
      try{
        await axios.put("http://localhost:8800/books/"+bookId,book)
        navigate("/book");
      }catch(err){
          console.log(err);
      }
    }
  
  
  console.log(book)
  return (
    <div className="form">
      <h1>Update The Book</h1>
      <input type="number" name="id" value={id} disabled/>
      <input type="text" name="title" onChange={handleChange} placeholder='title' />
      <input type="text" name="desc" onChange={handleChange} placeholder='discription' />
      <input type="number" name="price" onChange={handleChange} placeholder='price' />
      <input type="text" name="cover" onChange={handleChange} placeholder='cover' />
      <button className="formButton" onClick={handleClick}>Update</button>
    </div>
  );
};

export default UpdateBooks

