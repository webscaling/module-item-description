import React from 'react';

const Title = (props) => {
  return (
  <div>
    <div id="des_title">
        {props.item.title}
    </div>
    <div id="des_reviewsRatingsQuestions">
      <span id="des_rating">
        <span id="des_stars">
          {/* {props.item.rating} */}
          <img src="https://shazamazon.s3.us-east-2.amazonaws.com/furniture/des_rating.png"></img>
        </span>
        <span id="des_numOfRatings">
          {props.item.numOfRatings} customer reviews
        </span>
      </span>
      <span id="des_numOfQuestions">
          {props.item.numOfQuestions} answered questions
      </span>
    </div>
    <div id="des_listPrice">
      List Price: <span id="des_crossedOut">{(props.item.price * 1.2).toFixed(2)}</span>
    </div>
    <div id="des_price">
        Price: <span id="des_money">${props.item.price}</span> <span className="des_blue">FREE INSTANT MANIFESTATION</span> on orders over $25 or get <span className="des_bold">Free Delivery by Owl</span> with <span className="des_blue">Shazamazon Prime</span>
    </div>
    <div id="des_options">
        {props.item.otherColors}
    </div>
    <div id="des_sellingPoints">
      <ul>
        {console.log(props.item.sellingPoints)}
        {props.item.sellingPoints.map((point) => (
          <li key={point} className="des_sellingPoint">{point}</li>
        ))}
      </ul>
    </div>
  </div>
  )
};

export default Title;