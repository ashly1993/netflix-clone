import React from 'react';
import "./Navbar.css";
import Logo from '../../images/Netflix-Brand-Logo.png'
import Avatar from '../../images/Netflix-avatar.png'


function Navbar() {
    return (
        <div className="nav-section">
            <div className="logo">
                <img src={Logo} alt="" />
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
