import React from 'react';


const Price_Under = (props) => {
  return (
    <div id="des_price">
      Price: <span id="des_money">${parseFloat(props.item.Price).toFixed(2)} </span> <span className="des_blue">FREE INSTANT MANIFESTATION</span> on orders over $25 or get <span className="des_bold">Free Delivery by Owl</span> with <span className="des_blue">Shazamazon Prime</span>
    </div>
  )
}

export default Price_Under;