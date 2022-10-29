import React from 'react'
import './SearchBar.css'
import {useState} from 'react'
import axios from '../../axios'
import {API_KEY} from '../../constants/constants'

function SearchBar() {

    const [searchVal, setSearchVal] = useState('');

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearchVal(e.target.value);
      }

    const handleClearBtn = () => {
        setSearchVal('');
      }


// new method

const searchInput = (e)=>{
  console.log("searchVal:",searchVal);
  axios.get(`search/multi?api_key=${API_KEY}&query=${searchVal}`).then((response)=>{
    console.log("Result:",response.data.results);
    if(response.data.results){
      alert("Movie availble")  
    }
    else
    console.log("Not Found");
  })
  .catch((err) => {
    console.log("Not Found",err);
  });
}




 

    // const searchInput = (e)=>{
    //   console.log("searchVal:",searchVal);
    //   // console.log("se",e);
    //   axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
    //   console.log("trending:",response.data.results);
    //   const dataBaseResult = response.data.results
    //   console.log("dataBaseResult:",dataBaseResult);



      // Find if the array contains an object by comparing the property value
        // if(dataBaseResult.some(dataBaseResult => dataBaseResult.name === searchVal[0].toUpperCase() + searchVal.slice(1).trim())){
        //      alert("Object found inside the array.");
        //      } else{
        //      alert("Object not found.");
        //        }

      // Method 1

      // const first = dataBaseResult.find((result) => {
      //   return result.name == searchVal[0].toUpperCase() + searchVal.slice(1).trim();
      // });
      
      // console.log("first:",first);

  
     // Method 2

      // var __FOUND =  dataBaseResult.find(function(result, index) {
      //   if(result.name == searchVal[0].toUpperCase() + searchVal.slice(1).trim())
      //    return true;      
      // }); 
      // console.log(__FOUND);
    
      
    // }) 
    // }

 
  

  return (
    <div className='searchBar'>
      <div className='input-wrap'>
      <i onClick={searchInput} className="fas fa-search"></i>
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
