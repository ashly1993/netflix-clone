import React from 'react'
import './SearchBar.css'
import {useState} from 'react'

function SearchBar(props) {

    const [searchVal, setSearchVal] = useState('');

    const handleInput = (e) => {
        setSearchVal(e.target.value);
      }

    const handleClearBtn = () => {
        setSearchVal('');
      }
  

  return (
    <div className='searchBar'>
      <div className='input-wrap'>
        <i className="fas fa-search"></i>
        <label 
          for="product-search" 
          id="input-label">
          Product Search
        </label>
        <input 
          onChange={handleInput}
          value={searchVal}
          type="text" 
          name="product-search" 
          id="product-search" 
          placeholder="Search Movies"
          autoComplete='off'
        />
        <i 
          onClick={handleClearBtn}
          className="fas fa-times"
        ></i>
      </div>
      
    </div>
  )
}

export default SearchBar
