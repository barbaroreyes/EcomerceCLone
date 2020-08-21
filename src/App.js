import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import  HomePage from './pages/Homepages/homePage'

const  HastPage =()=> (
  <div>
     <h1>HatsPage</h1>
  </div>
)
function App () {
  return (
    <div>
      <Switch>
   <Route exact path='/' component={HomePage} />
   <Route  path='/hast' component={HastPage} />
    </Switch>
    
  </div>
  )
}

export default App
