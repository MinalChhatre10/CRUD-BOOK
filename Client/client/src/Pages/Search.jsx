import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Search = () => {
  return (
    <div className="container">
        <Navigation />
        <h1 className='head' >Search</h1>
    <div className="search-con">

   
      <div className="search-card">
        <h2>Search Books</h2>
        <input type="text" name="title" placeholder='Title' />
        <Link to="/searchbooks">
          <button className="search-button">Search</button>
        </Link>
      </div>
      <div className="search-card">
        <h2>Search Clients</h2>
        <input type="text" name="name" placeholder='Name' />
        <Link to="/searchclients">
          <button className="search-button">Search</button>
        </Link>
      </div>
      <div className="search-card">
        <h2>Search Orders</h2>
        <input type="text" name="idClient" placeholder='Client-Id' />
        <Link to="/searchorders">
          <button className="search-button">Search</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Search;
