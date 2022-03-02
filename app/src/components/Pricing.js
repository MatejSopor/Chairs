import React from 'react'

export const Pricing = (props) => {
  return (
    
   <div className='grid-chairs'>
    <section className="gridforfirues">
  
    
    <figure className="chair">
      <img src={props.img} height="177" width="266"/>
      <div className='chair-box'>
        <h3 className="stolicka">{props.title}</h3>
        <ul className="chair-details">
          <li>
            {props.about[0]}
          </li>
          <li>
          {props.about[1]}
          </li>
          <li>
          {props.about[2]}
          </li>
          <li>
          {props.about[3]} 
          </li>
        </ul>
        <div className="chair-price">
        <strong className="cena">{props.price}€</strong>
        <a className='add-to-cart' href="#">Add to cart</a>  
        </div>
      </div>
    </figure>
    
   </section> 
   </div>
   
  )
}
