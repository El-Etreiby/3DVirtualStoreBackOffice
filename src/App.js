
import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen' ;
import CartScreen from './screens/CartScreen' ;
import ProductScreen from './screens/ProductScreen' ;
import VirtualScreen from './screens/VirtualScreen' ;
import AdminScreen from './screens/AdminScreen';
import CategoriesScreen from './screens/CategoriesScreen';
//components

import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
function App() {
  const[sideToggle, setSideToggle] = useState(false);
  return (
  
   

    <Router>
    <Navbar click={()=>setSideToggle(true)}/>
   <SideDrawer show={sideToggle}/>
     <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>

     
     {/* Home Screen*/}
     {/* productScreen */}
     {/* cart screen*/}
    <main>
      <Routes>
      <Route exact path="/" element={<HomeScreen />} />
      <Route exact path = "/product/:id" element={<CategoriesScreen />} />
      <Route exact path="/cart" element={<CartScreen />} />
      <Route exact path="/virtualstore" element={<VirtualScreen />} />
      
       <Route exact path="/" element={<AdminScreen />} />

      </Routes>
    </main>

    </Router>
  );
}

export default App;
