
import React, {useRef, useEffect} from 'react';
import '../styles/Header.scss';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import logo from '../assets/images/eco-logo.png'
import userIcon from '../assets/images/user-icon.png'
import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import useAuth from '../custom-hooks/useAuth'
import { signOut } from 'firebase/auth'
import {auth} from '../firebase/firebase'
import { toast } from 'react-toastify';


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

const headerRef = useRef(null);
const menuRef = useRef(null);

const navigate = useNavigate();

const totalQuantity = useSelector(state=> state.cart.totalQuantity);

const profileActionRef = useRef(null);
const {currentUser} = useAuth();

const logout = () => {
  signOut(auth).then(()=>{
      toast.success('Logged out');
      navigate('/home')
  }).catch(err=> {
      toast.error(err.message)
  } )
}

const toggleProfileActions = () => 
  profileActionRef.current.classList.toggle('show_profileActions');


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

const navigateToCart = () => {
  navigate('/cart');
}


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
                <span className='cart_icon' onClick={navigateToCart}>
                    <i class="ri-shopping-bag-line"></i>
                    <span className='badge'>{totalQuantity}</span>
                </span>
               
                  <div className='profile' onClick={toggleProfileActions}>
                        <motion.img whiletap = {{scale: 1.2}} 
                            src={currentUser? currentUser.photoURL : userIcon} 
                            alt="" 
                        />
                         <div className='profile_actions' 
                                ref={profileActionRef} 
                                onClick={toggleProfileActions}
                                >
                            {currentUser ? (
                                <div className='d-flex align-items-center
                                justify-content-center flex-column'>
                                <span onClick={logout}>Logout</span>
                                <Link to='/dashboard'>Dashboard</Link>
                                </div>
                                ) : ( 
                                <div className='d-flex align-items-center
                                justify-content-center flex-column'>
                                    <Link to='/signup'>Signup</Link>
                                    <Link to='/login'>Login</Link>
                                </div>)
                            }

                        </div>
                    </div>
               
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