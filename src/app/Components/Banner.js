'use client'
import '../style.css';
import Image from 'next/image';
import LogoImg from '../images/logo.png'
import ToggleIcon from '../images/toggle-icon.png'
import FlagUKImg from '../images/flag-uk.png'
import Flagfrance from '../images/flag-france.png'

export default function Banner(){
    const closeNav=()=>{}
    const openNav=()=>{}
    return(<>
    <div className="banner_bg_main">
    {/* <!-- header top section start --> */}
         <div className="container">
            <div className="header_section_top">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="custom_menu">
                        <ul>
                           <li><a href="#">Best Sellers</a></li>
                           <li><a href="#">Gift Ideas</a></li>
                           <li><a href="#">New Releases</a></li>
                           <li><a href="#">Today's Deals</a></li>
                           <li><a href="#">Customer Service</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- header top section start -->
         <!-- logo section start --> */}
         <div className="logo_section">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="logo"><a href="index.html">
                        <Image width={100}
      height={100} src={LogoImg} alt="logo"/></a></div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- logo section end -->
         <!-- header section start --> */}
         <div className="header_section">
            <div className="container">
               <div className="containt_main">
                  <div id="mySidenav" className="sidenav">
                     <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                     <a href="index.html">Home</a>
                     <a href="fashion.html">Fashion</a>
                     <a href="electronic.html">Electronic</a>
                     <a href="jewellery.html">Jewellery</a>
                  </div>
                  <span className="toggle_icon" onClick={openNav()}><Image src={ToggleIcon} alt="logo"/></span>
                  <div className="dropdown">
                     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category 
                     </button>
                     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                     </div>
                  </div>
                  <div className="main">
                     {/* <!-- Another variation with a button --> */}
                     <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search this blog"/>
                        <div className="input-group-append">
                           <button className="btn btn-secondary" type="button" style={{backgroundColor: '#f26522',borderColor:'#f26522'}}>
                           <i className="fa fa-search"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="header_box">
                     <div className="lang_box ">
                        <a href="#" title="Language" className="nav-link" data-toggle="dropdown" aria-expanded="true">
                        <Image src={FlagUKImg} alt="flag" className="mr-2 " title="United Kingdom"/> English <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
                        </a>
                        <div className="dropdown-menu ">
                           <a href="#" className="dropdown-item">
                           <Image src={Flagfrance} className="mr-2" alt="flag"/>
                           French
                           </a>
                        </div>
                     </div>
                     <div className="login_menu">
                        <ul>
                           <li><a href="#">
                              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                              <span className="padding_10">Cart</span></a>
                           </li>
                           <li><a href="#">
                              <i className="fa fa-user" aria-hidden="true"></i>
                              <span className="padding_10">Cart</span></a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </div>
    </>)
}