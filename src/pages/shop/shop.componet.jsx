import React from 'react';
import CollectionPre from  '../../Componets/collection-pre/collection-pre'
import SHOPDATA from './SHOPDATA.js'

class ShopPage extends React.Component{
 constructor (props){
     super(props)
     this.state ={
       collections : SHOPDATA
     };
 }
 render(){
     const {collections} = this.state;
     return (<div className='shop-page'>
         {
             collections.map(({id,...otherCollections}) => (
                 <CollectionPre key={id} {...otherCollections}/>
             ))
         }

     </div>)
 }
}
export default ShopPage