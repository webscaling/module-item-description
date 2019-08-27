import React from 'react';


const Price_Over = (props) => {
  console.log(props)
  return (
    <div id="des_price">
    Price: <span id="des_money">${parseFloat(props.item.Price).toFixed(2)}</span> <span className="des_bold">FREE Delivery by Owl. </span> <span className="des_blue">Details</span> & <span className="des_blue">FREE Returns</span>
    </div>
  )
}

export default Price_Over;