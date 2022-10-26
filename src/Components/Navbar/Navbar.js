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
                <a href="">TV Shows</a>
                <a href="">Movies</a>
                <a href="">Catagories</a>
                {/* <select id="mySelect" className='selectt'>
                 <option value>Catagory</option>
                 <option value="foo">Action</option>
                 <option value="buz">Comedy</option>
               </select>                            */}
              </div>
            </div>
           

            <div className="right">
                <div className="right__nav">
                    <nav>
                        <ul>
                            <li className="hide__left_navlinks" ><a href=""><i class="fas fa-search"></i></a></li>
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



