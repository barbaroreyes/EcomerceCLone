import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import  HomePage from './pages/Homepages/homePage';
import ShopPage  from './pages/shop/shop.componet';
import SninAndUp from './pages/Sing/singCompo';
import {auth} from  './fireBase/firebase.util'

import  Header  from './Componets/header.componet//header.comp';



class  App extends React.Component {
 constructor(){
   super()
   this.state ={
     currentUser: null
   }
 }
 unsubscribeFromAuth = null
 componentDidMount(){
  this.unsubscribeFromAuth= auth.onAuthStateChanged(user =>{
     this.setState({currentUser:user})
     console.log(user)
   })
 }
 componentWillUnmount(){
   this.unsubscribeFromAuth();
 }
 render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
   <Route exact path='/' component={HomePage} />
   <Route  path='/shop' component={ShopPage} />
   <Route  path='/singin' component={SninAndUp} />
    </Switch>
    
  </div>
  )
 }
}

export default App
