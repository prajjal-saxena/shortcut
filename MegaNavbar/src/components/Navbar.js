import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <>
    
  <nav class="navbar navbar-expand-lg">
        <div class="container-fluid container navib">
        <a class="navbar-brand" href="index.html"><img src="img/logo.png" width="80%" alt=""/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav">
          <ul class="navbar-nav">
            <li class="nav-item active"> <a class="nav-link" href="index.html">HOME</a> </li>
            <li class="nav-item dropdown" id="myDropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">SOLUTIONS</a>
              <ul class="dropdown-menu">
                <li> <a class="dropdown-item" href="#"> Dropdown item 1 </a></li>
                <li> <a class="dropdown-item" href="#"> Dropdown item 2 &raquo; </a>
                  <ul class="submenu dropdown-menu">
                    <li><a class="dropdown-item" href="#">Submenu item 1</a></li>
                    <li><a class="dropdown-item" href="#">Submenu item 2</a></li>
                    <li><a class="dropdown-item" href="#">Submenu item 3 &raquo; </a>
                      <ul class="submenu dropdown-menu">
                        <li><a class="dropdown-item" href="#">Multi level 1</a></li>
                        <li><a class="dropdown-item" href="#">Multi level 2</a></li>
                      </ul>
                    </li>
                    <li><a class="dropdown-item" href="#">Submenu item 4</a></li>
                    <li><a class="dropdown-item" href="#">Submenu item 5</a></li>
                  </ul>
                </li>
                <li><a class="dropdown-item" href="#"> Dropdown item 3 </a></li>
                <li><a class="dropdown-item" href="#"> Dropdown item 4 </a></li>
              </ul>
            </li>
            <li class="nav-item dropdown" id="myDropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">SERVICES</a>
              <ul class="dropdown-menu">
                <li> <a class="dropdown-item" href="#"> Dropdown item 1 </a></li>
                <li> <a class="dropdown-item" href="#"> Dropdown item 2 &raquo; </a>
                  <ul class="submenu dropdown-menu">
                    <li><a class="dropdown-item" href="#">Submenu item 1</a></li>
                    <li><a class="dropdown-item" href="#">Submenu item 2</a></li>
                    <li><a class="dropdown-item" href="#">Submenu item 3 &raquo; </a>
                      <ul class="submenu dropdown-menu">
                        <li><a class="dropdown-item" href="#">Multi level 1</a></li>
                        <li><a class="dropdown-item" href="#">Multi level 2</a></li>
                      </ul>
                    </li>
                    <li><a class="dropdown-item" href="#">Submenu item 4</a></li>
                    <li><a class="dropdown-item" href="#">Submenu item 5</a></li>
                  </ul>
                </li>
                <li><a class="dropdown-item" href="#"> Dropdown item 3 </a></li>
                <li><a class="dropdown-item" href="#"> Dropdown item 4 </a></li>
              </ul>
            </li>
            <li class="nav-item dropdown" id="myDropdown">
              <a class="nav-link" href="#" data-bs-toggle="dropdown">PARTNERS</a>
              <ul class="dropdown-menu">
                <li> <a class="dropdown-item" href="#"> Dropdown item 1 </a></li>
                <li> <a class="dropdown-item" href="#"> Dropdown item 2 &raquo; </a>
                  <ul class="submenu dropdown-menu">
                    <li><a class="dropdown-item" href="#">Submenu item 1</a></li>
                    <li><a class="dropdown-item" href="#">Submenu item 2</a></li>
                    <li><a class="dropdown-item" href="#">Submenu item 3 &raquo; </a>
                      <ul class="submenu dropdown-menu">
                        <li><a class="dropdown-item" href="#">Multi level 1</a></li>
                        <li><a class="dropdown-item" href="#">Multi level 2</a></li>
                      </ul>
                    </li>
                    <li><a class="dropdown-item" href="#">Submenu item 4</a></li>
                    <li><a class="dropdown-item" href="#">Submenu item 5</a></li>
                  </ul>
                </li>
                <li><a class="dropdown-item" href="#"> Dropdown item 3 </a></li>
                <li><a class="dropdown-item" href="#"> Dropdown item 4 </a></li>
              </ul>
            </li>
            <li class="nav-item"><a class="nav-link" href="#">SAI PARIVAAR</a></li>
            <li class="nav-item"><a class="nav-link" href="/About/about_us.html">ABOUT US</a></li>

          </ul>
        </div>
        </div>
 
        </nav>
    </>
  )
}

export default Navbar
