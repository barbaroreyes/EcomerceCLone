import React from 'react';
// import FormInput from '../../fom-imput/form-inputCompo.jsx'
import './singin-compo.scss';


class SingIn extends React.Component{
 constructor(props){
     super(props)
     this.state ={
         email: '',
         password:''
     }
 }
 handleSubmit = event => {
     event.preventDefault();
     this.setState({email:'',password:''})
 }
 handleChange = event => {
     const {value,name} = event.target;
     this.setState({[name]:value})
 }
 
 render(){
     return (
         <div className ='sing-in'>
           <h2>I Already have a account</h2>
           <span>Sign in whith your email and your password</span>
           <form onSubmit={this.handleSubmit}>
               <input name="email" type='email' onChange= {this.handleChange} value ={this.state.email}/>
               <label>Email</label>
               <input 
               name="password" 
               type='password' 
               value ={this.state.email}
               onChange= {this.handleChange}
               required/>
               <label>Password</label>
               <input type="submit"  value ='Submit Form'/>
              
           </form>
         </div>
     )
 }
}
export default SingIn