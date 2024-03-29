import { Fragment } from 'react';
import Header from './Header'
import Footer from './Footer';
import Routers from '../routers/Routers';
import AdminNav from '../admin-dashboard/AdminNav';
import { useLocation } from 'react-router-dom';


const Layout = () => {
  const location = useLocation();

    return <Fragment>
      {
        location.pathname.startsWith('/dashboard') ? 
          <AdminNav/> : <Header/>
      }
      <div>
        <Routers/>
      </div>
      <Footer/>
    </Fragment>
   
  
}

export default Layout