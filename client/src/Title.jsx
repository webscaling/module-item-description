import React from 'react';
import Price_Over from './Price_Over.jsx';
import Price_Under from './Price_Under.jsx';


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
          <img id="des_expand_arrow" src="https://shazamazon.s3.us-east-2.amazonaws.com/icons/expand_arrow.png"></img>
        </span>
        <span id="des_numOfRatings">
          {props.item.numOfRatings} customer reviews
          <img id="des_grey_bar" src="https://shazamazon.s3.us-east-2.amazonaws.com/icons/lil_grey_bar.png"></img>
        </span>
      </span>
      <span id="des_numOfQuestions">
          {props.item.numOfQuestions} answered questions
      </span>
    </div>
    <div id="des_listPrice">
      List Price: <span id="des_crossedOut">{(props.item.Price * 1.2).toFixed(2)}</span>
    </div>
      {(props.item.Price < 25) ? (<Price_Under item={props.item} />) : (<Price_Over item={props.item} />)}
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