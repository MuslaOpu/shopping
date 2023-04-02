import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import Shop from '../pages/Shop';
import Signup from '../pages/Signup';
import ProtectedRoute from './ProtectedRoute';
import AddProducts from '../admin-dashboard/AddProducts';
import AllProducts from '../admin-dashboard/AllProducts';
import Dashboard from '../admin-dashboard/Dashboard';
import Users from '../admin-dashboard/Users';

const Routers = () => {
  return <Routes>
      <Route path='/' element={<Navigate to='home'/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='/' element={<ProtectedRoute/>}>
            <Route path='checkout' element={<Checkout/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='dashboard/allproducts' element={<AllProducts/>}/>
            <Route path='dashboard/addproducts' element={<AddProducts/>}/>
            <Route path='dashboard/users' element={<Users/>}/>
      </Route>
                                          
      <Route path='login' element={<Login/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='shop/:id' element={<ProductDetails/>}/>
      <Route path='signup' element={<Signup/>}/>
      
    </Routes>
  
}

export default Routers;