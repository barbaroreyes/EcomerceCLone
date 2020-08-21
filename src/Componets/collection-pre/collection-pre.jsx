import React from 'react';
import CollectionItem from '../collection-item/collection-item.componet'
import './collection-pre.scss'
 
const CollectionPre = ({title,items}) => (
    <div className = 'collection-preview  '>
        <h1 className ='title ' >{title.toUpperCase()}</h1>
        <div className ='previe '>
          {
              items.filter((item,idx)=> idx <4).map( ({id,...otherItemProps})=>(
                <CollectionItem key={id}{...otherItemProps}/>
              ))
          }
        </div>
    </div>
)
export default  CollectionPre 