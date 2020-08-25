import React from 'react';
import FormInput from '../../fom-imput/form-inputCompo';
import CustomButton from '../../Componets/custom-butttom/custom-buttomComp';
import{signInWidthGoogle} from '../../fireBase/firebase.util'
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
               <FormInput 
               name="email" 
               type='email' 
               handleChange= {this.handleChange} 
               value ={this.state.email} 
               label= 'email'
               required
               />
               
               <FormInput 
               name="password" 
               type='password' 
               value ={this.state.email}
               handleChange= {this.handleChange}
               label='password'
               required/>

               <div className='buttons'>
               <CustomButton type="submit">Sign in</CustomButton>
               <CustomButton 
               onClick={signInWidthGoogle} 
               isGoogleSigIn>{' '}
               Sign In With Google {' '}
             </CustomButton> 
             </div>

             </form>
         </div>
     )
 }
}
export default SingIn