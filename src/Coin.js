import React from 'react';
import './Coin.css';
   const Coin = ({
  name,
  price,
  symbol,
  marketcap,}) => {
  return (
     
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <h1>{name}</h1>
          
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>

          <p className='coin-marketcap'>
            MarkrtCap: ${marketcap.toLocaleString()}
          </p>
          <button className='coin-btn'>Save</button>
          <button className='coin-del'>Delete</button>
         </div>
          
      </div>
       </div>
       
  );
}; 

export default Coin;