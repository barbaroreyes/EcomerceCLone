import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import  HomePage from './pages/Homepages/homePage';
import ShopPage  from './pages/shop/shop.componet';
import SninAndUp from './pages/Sing/singCompo'
import  Header  from './Componets/header.componet//header.comp';



function App () {
  return (
    <div>
      <Header/>
      <Switch>
   <Route exact path='/' component={HomePage} />
   <Route  path='/shop' component={ShopPage} />
   <Route  path='/singin' component={SninAndUp} />
    </Switch>
    
  </div>
  )
}

export default App
