
import React, {useRef, useEffect} from 'react';
import '../styles/Header.scss';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import {motion} from 'framer-motion';

import logo from '../assets/images/eco-logo.png'
import userIcon from '../assets/images/user-icon.png'
import { toast } from 'react-toastify';
import { Container, Row } from 'reactstrap';



// import useAuth from '../custom-hooks/useAuth';
// import { auth } from '../firebase/firebase';
// import { signOut } from 'firebase/auth';



const nav_links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
];

// const auth_links1 = [
//   {
//     path: 'login',
//     display: 'Login'
//   },
//   {
//     path: 'signup',
//     display: 'Signup'
//   }
// ];

// const auth_links2 = [
//   {
//     path: 'admin',
//     display: 'Admin'
//   },
//   {
//     path: 'logout',
//     display: 'Home'
//   }
// ];


const Header = () => {

  // const navigate = useNavigate();
  // const currentUser = useAuth();

//   const logout = () => {
//     signOut(auth).then(()=>{
//         toast.success('Logged out');
//         navigate('/home')
//     }).catch(err=> {
//         toast.error(err.message)
//     } )
// }



const headerRef = useRef(null);
const menuRef = useRef(null);

const stickyHeaderFunc = () => {
  window.addEventListener("scroll", () => {
    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
      headerRef.current.classList.add('sticky_header')
    }else{
      headerRef.current.classList.remove('sticky_header')
    }
  });
};

useEffect(()=>{
  stickyHeaderFunc();
  return ()=> window.removeEventListener("scroll", stickyHeaderFunc)
});

const menuToggle = () => menuRef.current.classList.toggle( 'active_menu');


  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
        <div className='nav_wrapper'>
            <div className="logo">
                <img src={logo} alt="" />
                <div>
                    <h1>MOPU</h1>
                </div>
            </div>
          

          <div className='navigation' ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                  {nav_links.map((item, index)=> (
                      <li className="nav_item" key={index}>
                      <NavLink to={item.path} className = {(navClass) =>
                          navClass.isActive ? 'nav_active' : ''}>
                          {item.display}
                      </NavLink>
                  </li>
                  ))}
                </ul>
            </div>
          <div className="nav_icons">
                <span className='fav_icon'>
                    <i class="ri-heart-line"></i>
                    <span className='badge'>1</span>
                </span>
                <span className='cart_icon'>
                    <i class="ri-shopping-bag-line"></i>
                    <span className='badge'>1</span>
                </span>
                <span> 
                  <motion.img whileTap = {{scale: 1.2}} src={userIcon} alt="" />
                </span>
                <div className='mobile_menu' >
                  <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
                </div>
            </div>
        </div>
        

        </Row>
      </Container>
    </header>
  )
}

export default Header