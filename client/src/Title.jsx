import React from 'react';


const Title = (props) => {

  return (
  <div>
    <div id="des_title">
        {props.item.ItemName}
    </div>
    <div id="des_reviewsRatingsQuestions">
      <span id="des_rating">
        <span id="des_stars">
          <img id="des_stars_img" src={props.item.ratingImage}></img>
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
      List Price: <span id="des_crossedOut">{(props.item.Price * 1.2).toFixed(2)}</span>
    </div>
    <div id="des_price">
      {/* {(props.item.Price < 25)
        ? */}
        Price: <span id="des_money">${parseFloat(props.item.Price).toFixed(2)} </span> <span className="des_blue">FREE INSTANT MANIFESTATION</span> on orders over $25 or get <span className="des_bold">Free Delivery by Owl</span> with <span className="des_blue">Shazamazon Prime</span>
        {/* :
        Price: <span id="des_money">${parseFloat(props.item.Price).toFixed(2)}</span> <span className="des_bold">FREE Delivery by Owl. </span> <span className="des_blue">Details</span> & <span className="des_blue">FREE Returns</span>
       } */}
    </div>
    <div id="des_options">
        {props.item.otherColors}
    </div>
    <div id="des_sellingPoints">
      <ul>
        {props.item.sellingPoints.map((point) => (
          <li key={point} className="des_sellingPoint">{point}</li>
        ))}
      </ul>
    </div>
  </div>
  )
};

export default Title;