import React from 'react';
import { Container, Row } from 'reactstrap';

import useAuth from '../custom-hooks/useAuth';
import '../styles/admin-nav.scss';

import { NavLink } from 'react-router-dom';

const admin__nav = [
  {
    display: 'Dashboard',
    path: '/dashboard'
  },
  {
    display: 'AllProducts',
    path: '/dashboard/allproducts'
  },
  {
    display: 'Orders',
    path: '/dashboard/orders'
  },
  {
    display: 'Users',
    path: '/dashboard/users'
  },
  {
    display:'AddProducts',
    path: '/dashboard/addproducts'
    }
]

const AdminNav = () => {

  const { currentUser } =useAuth()

  return (
    <>
      <header className='admin_header'>
        <div className="admin_nav-top">
          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <h2>MOPU</h2>
              </div>

              <div className="search_box">
                <input type='text' placeholder='Search.......' />
                <span><i class="ri-search-line"></i></span>
              </div>

              <div className="admin_nav-top-right">
                <span>
                <i class="ri-notification-3-line"></i>
                <i class="ri-settings-2-line"></i>
                <img src={currentUser && currentUser.photoURL} alt="" />
                </span>
              </div>
            </div>
          </Container>
        </div>

      </header>

      <section className='admin_menu'>
        <Container>
          <Row>
            <div className="admin_navigation">
              <ul className="admin_menu-list">

                {admin__nav.map((item,index)=>(
                <li className='admin_menu-item' key={index}>
                      <NavLink 
                        to ={item.path} 
                        className={navClass=> 
                          navClass.isActive ? 'active_admin_menu ' : ''
                          } 
                          >
                            {item.display}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </div>
          </Row>
        </Container>

      </section>
    </>
  );
}

export default AdminNav;