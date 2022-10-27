import React from 'react';
import "./Navbar.css";
import Logo from '../../images/Netflix-Brand-Logo.png'
import Avatar from '../../images/Netflix-avatar.png'
// import ReactDropdown from 'react-dropdown';



function Navbar() {

    // const options = [
    //     'one', 'two', 'three'
    //   ];
    //   const defaultOption = options[0];

    return (
        <div className="nav-section">

            <div className="leftNav">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <div className="links">
                <div className="tvShows">
                <a href="">TV Shows</a>
                </div>
                <div className="mmovies">
                <a href="">Movies</a>
                </div>                  
                <div class="dropdown">
                    <a href="" className='dropdownAtag'>Catagory<button class="dropbtn"><i class="fa fa-caret-down"></i></button></a>  
                       <div class="dropdown-content">
                        <a href="#action">Action</a>
                        <a href="#comedy">Comedy</a>
                        <a href="#romance">Romance</a>
                       </div>
                </div> 
                                        
               </div>
            </div>
            <div className="right">
                <div className="right__nav">
                    <nav>
                        <ul>
                            <li className="hide__left_navlinks" >
                            <a href="">
                            <div class="search-container">  
                            <form action="#"> 
                            <input type="text" placeholder="Search.." name="search"/>
                            <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                            </div>
                            </a>
                            </li>
                            <li className="hide__left_navlinks" ><a href="">CHILDREN</a></li>
                            <li><a href=""><i class="fas fa-gift"></i></a></li>
                            <li><a href=""><i class="fas fa-bell"></i></a></li>
                            <li><img className="avatar" src={Avatar} alt="" /></li>
                            <li className="hide__left_navlinks"><i class="fas fa-caret-down"></i></li>
                        </ul>
                    </nav>
                </div>
            </div>
            
        
        </div>
    )
}

export default Navbar



