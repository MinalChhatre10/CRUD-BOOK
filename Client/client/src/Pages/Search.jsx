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
        <Link to="/search-books">
          <button className="search-button">Search</button>
        </Link>
      </div>
      <div className="search-card">
        <h2>Search Clients</h2>
        <Link to="/search-clients">
          <button className="search-button">Search</button>
        </Link>
      </div>
      <div className="search-card">
        <h2>Search Orders</h2>
        <Link to="/search-orders">
          <button className="search-button">Search</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Search;
