import React from 'react';
import {Link}from 'react-router-dom'
import './header.comp.styles.scss'
import {ReactComponent as  Logo} from '../../assets/crow.svg'
const Header = () => (
    <div className='header'>
   <Link className ='logo-container'  to='/'>
    <Logo  className='logo'/>
    </Link>
    <div className ='options'>
        <Link className='option' to='/shop'>
           Shop
        </Link>
        <Link className='option' to='/contact'>
           Contact
        </Link>
        <Link className='option' to='/contact'>
           Sing In
        </Link>
        

    </div>
    

    </div>
)
export default Header